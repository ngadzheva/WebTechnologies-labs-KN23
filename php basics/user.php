<?php
    class User {
        private $username;
        private $email;
        private $password;

        public function __construct($username, $email, $password) {
            $this->username = $username;
            $this->email = $email;
            $this->password = $password;
        }

        public function get_username() {
            return $this->username;
        }

        public function set_email($email) {
            $this->email = $email;
        }

        public function info() {
            return "$this->username: $this->email";
        }
    }
?>