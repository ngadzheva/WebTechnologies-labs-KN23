<?php
    require_once "user.php";
    require_once "student.php";

    $user = new User("ivgerves", "ivgerves@gmail.com", "slfjkdsj5fdsf5");
    echo $user->get_username();

    $student = new Student("ivgerves", "ivgerves@gmail.com", "slfjkdsj5fdsf5", 88888);
    echo $student->student_info();
    echo $student->info();
?>