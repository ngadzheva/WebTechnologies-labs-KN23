<?php
    require_once "db.php";

    class User {
        private $username;
        private $password;
        private $email;
        private $userId;

        private $db;

        public function __construct($username, $password) {
            $this->username = $username;
            $this->password = $password;

            $this->db = new Database();
        }

        public function getUsername() {
            return $this->username;
        }

        public function getEmail() {
            return $this->email;
        }

        public function getUserId() {
            return $this->userId;
        }

        public function exists() {
            $result = $this->db->selectUserQuery(['username' => $this->username]);

            if ($result['success']) {
                $user = $result['data']->fetch(PDO::FETCH_ASSOC);

                if ($user) {
                    return ["success" => true, "data" => $user];
                } else {
                    return ["success" => true, "data" => null];
                }
            } else {
                return $result;
            }
        }

        public function isValid($password, $passwordHash) {
            $isPasswordValid = password_verify($password, $passwordHash);

            if ($isPasswordValid) {
                $this->password = $passwordHash;
            }

            return $isPasswordValid;
        }

        public function createUser($passwordHash, $email) {
            $result = $this->db->insertUserQuery(['username' => $this->username, 'password' => $passwordHash, 'email' => $email]);

            if ($result['success']) {
               $this->email = $email;
               $this->password = $passwordHash;
            }

            return $result;
        }
    }
?>