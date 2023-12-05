<?php
    require_once 'testInputUtility.php';
    require_once 'user.php';

    header('Content-Type: application/json');

    $errors = [];
    $serverErrors = [];
    $userExists = [];
    $user = null;

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $userData = json_decode($_POST['data'], true);

        $username = isset($userData['username']) ?  testInput($userData['username']) : '';
        $password = isset($userData['password']) ?  testInput($userData['password']) : '';
        $confirmPassword = isset($userData['confirmPassword']) ?  testInput($userData['confirmPassword']) : '';
        $email = isset($userData['email']) ?  testInput($userData['email']) : '';

        if (!$username) {
            $errors[] = 'Username is required field';
        }

        if (!$password) {
            $errors[] = 'Password is required field';
        }

        if (!$confirmPassword) {
            $errors[] = 'Confirm password is required field';
        }

        if (strlen($username) < 3) {
            $errors[] = 'Username must be at least 3 characters';
        }

        if (strlen($password) < 6 || strlen($password) > 10) {
            $errors[] = 'Password must be between 6 and 10 symbols';
        }

        if ($username && strlen($username) > 3 && $password
            && strlen($password) > 6 && strlen($password) < 10) {
            if ($password !== $confirmPassword) {
                $errors[] = 'Confirm password must match password';
            } else {
                $user = new User($username, $password);
                $userExists = $user->exists();
                // echo json_encode($userExists);
                if ($userExists['success']) {
                    if ($userExists['data']) {
                        $errors[] = 'User already exists';
                    } else {
                        $passwordHash = password_hash($password, PASSWORD_DEFAULT);
                        $user->createUser($passwordHash, $email);
                    }
                } else {
                    $serverErrors[] = 'Internal server error';
                }
            }
        }
    } else {
        $serverErrors[] = 'Invalid request method';
    }

    if ($errors) {
        http_response_code(400);
        echo json_encode($errors);
    } else if ($serverErrors) {
        http_response_code(500);
        echo json_encode($serverErrors);
    } else {
        http_response_code(200);
        echo json_encode('User created successfully');
    }
?>