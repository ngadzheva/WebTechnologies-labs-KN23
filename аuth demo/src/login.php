<?php
    require_once 'testInputUtility.php';
    require_once 'tokenUtility.php';
    require_once 'user.php';

    header('Content-Type: application/json');
    session_start();

    $errors = [];
    $server_errors = [];

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $userData = json_decode($_POST['data'], true);

        $username = isset($userData['username']) ? testInput($userData['username']) : '';
        $password = isset($userData['password']) ? testInput($userData['password']) : '';
        $rememberUser = isset($userData['remember']) ? $userData['remember'] : false;

        if (!$username) {
            $errors[] = 'Username is required';
        }

        if (!$password) {
            $errors[] = 'Password is required';
        }

        if ($username && $password) {
            $user = new User($username, $password);
            $userExists = $user->exists();

            if ($userExists['success']) {
                if ($userExists['data']) {
                    $isPasswordValid = $user->isValid($password, $userExists['data']['password']);

                    if ($isPasswordValid) {
                        $_SESSION['userID'] = $userExists['data']['id'];

                        if ($rememberUser) {
                            $tokenHash = bin2hex(random_bytes(8));
                            $expires = time() + 30 * 24 * 60 * 60;
                            $token = new TokenUtility();
                            $token->createToken($tokenHash, $_SESSION['userID'], $expires);
                            setcookie('remember', $tokenHash, $expires);
                        }
                    } else {
                        $errors[] = 'Username or password is invalid';
                    }
                } else {
                    $errors[] = 'Username or password is invalid';
                }
            } else {
                $server_errors[] = 'Internal server error';
            }
        }
    } else {
        $server_errors[] = 'Invalid request';
    }

    if ($errors) {
        http_response_code(401);
        echo json_encode($errors);
    } else if ($server_errors) {
        http_response_code(500);
        echo json_encode($serverErrors);
    } else {
        http_response_code(200);
        echo json_encode('User logged in successfully');
    }
?>