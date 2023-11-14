<?php
    $host='localhost';
    $type='mysql';
    $name='wtech23';
    $user='root';
    $password='';

    try {
        $connection = new PDO("$type:host=$host;dbname=$name", $user, $password);

        $sql = 'CREATE TABLE students(
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            fn INT NOT NULL,
            user_id INT NOT NULL,
            PRIMARY KEY (fn),
            FOREIGN KEY (user_id) REFERENCES users(id)
        )';


        $sql = 'INSERT INTO students(first_name, last_name, fn, user_id) VALUES("Ivan", "Ivanov", 88888, 1)';
        // $connection->query($sql);

        $prepared_sql = 'INSERT INTO students(first_name, last_name, fn, user_id) VALUES(?, ?, ?, ?)';
        $prepared_students = $connection->prepare($prepared_sql);
        // $prepared_students->execute(['Dimitar', 'Dimitrov', 888795, 2]);
        // $prepared_students->execute(['Maria', 'Georgieva', 888786, 3]);
        
        $prepared_sql = 'UPDATE users SET email=:email WHERE id=:id';
        // $prepared_users = $connection->prepare($prepared_sql);
        // $prepared_users->execute(['email'=>'kfshfdjk@gjfkdg.codo', 'id'=>2]);

        $sql = 'SELECT * FROM students';

        $result = $connection->query($sql);
        var_dump($result->fetchAll(PDO::FETCH_NUM));

        echo '<br/>';

        $result = $connection->query($sql);
        var_dump($result->fetchAll(PDO::FETCH_ASSOC));

        echo '<br/>';

        $result = $connection->query($sql);
        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            echo $row['fn'] . ": " . $row['first_name'] . " " . $row['last_name'];
            echo "<br/>";
        }

        $prepared_sql = 'INSERT INTO users(id, username, password) VALUES(:id, :username, :password)';
        $prepared_users = $connection->prepare($prepared_sql);

        $user = ['username'=>'ivgerves', 'password'=>'dsljdkjkdsjfds', 'id'=>4];
        $student = ['Ivan', 'Veselinov', 885668, 4];

        $connection->beginTransaction();
        $prepared_users->execute($user);
        $prepared_students->execute($student);
        $connection->commit();
    } catch (Exception $error) {
        $connection->rollBack();
        echo $error;
    }
?>