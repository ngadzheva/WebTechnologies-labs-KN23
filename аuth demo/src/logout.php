<?php
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        sesstion_unset();
        session_destroy();

        setcookie('remember', '', time() - 60);
    }
?>