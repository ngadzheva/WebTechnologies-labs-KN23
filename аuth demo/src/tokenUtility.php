<?php
  require_once "db.php";

  /**
   * Use this class to manage user session tokens
   */
  class TokenUtility {
      private $db;

      public function __construct() {
          $this->db = new Database();
      }

      /**
       * Create user session token
       */
      public function createToken($token, $userId, $expires) {
        $this->db->insertTokenQuery(array("token" => $token, "user_id" => $userId, "expires" => $expires));
      }

      /**
       * Check whether the token is valid
       */
      public function checkToken($token) {
        $token = $this->db->selectTokenQuery(["token" => $token]);

        if ($token['success']) {
          // Check if expired
          return $token['user_id'];
        } else {
          return null;
        }
      }
  }
?>