<?php
    require_once 'user.php';

    header('Content-Type: application/json');
    session_start();

    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        if (isset($_SESSION) && isset($_SESSION['userID'])) {
            http_response_code(200);
            echo json_encode($_SESSION['userID']);
        } else {
            if (isset($_COOKIE) && isset($_COOKIE['remember'])) {
                $token = new TokenUtility();
                $isValid = $token->checkToken($_COOKE['remember']);

                if ($isValid) {
                    $_SESSION['userID'] = $token;
                    http_response_code(200);
                    echo json_encode($_SESSION['userID']);
                } else {
                    http_response_code(401);
                    echo json_encode('Session expired');
                }
            } else {
                http_response_code(401);
                echo json_encode('Unauthorized');
            }
        }
    }
?>