<?php
    require_once "user.php";

    class Student extends User {
        private $fn;

        public function __construct($username, $email, $password, $fn) {
            parent::__construct($username, $email, $password);

            $this->fn = $fn;
        }

        public function student_info() {
            $info = parent::info();
            return "$this->fn, $info";
        }
    }
?>