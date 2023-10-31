<?php
    echo gettype(15 / 3);

    $name = "Nevena";

    function greeting() {
        global $name;

        sum(6);
        echo "Hello, $name!";
    }

    greeting();

    function sum($a, $b = 1, $c = 7) {
        if ($a > $b) {
            $d = 5;
        }

        return $a + $b + $c + $d;
    }

    // echo $d;

    sum(6, 2, 8);
    sum(5, 3);
    sum(3);

    echo '<br/>';

    $arr = array(2, null, true, 'string');
    print_r($arr);
    echo '<br/>';
    var_dump($arr);
    echo '<br/>';
    $numbers = [2, 5, 8, 9];
    $numbers[] = 6;
    print_r($numbers);
    echo '<br/>';
    $numbers[9] = 4;
    print_r($numbers);
    echo '<br/>';

    array_unshift($numbers, 7);
    print_r($numbers);
    echo '<br/>';
    array_push($numbers, 10);
    print_r($numbers);
    echo '<br/>';

    array_shift($numbers);
    print_r($numbers);
    echo '<br/>';
    array_pop($numbers);
    print_r($numbers);
    echo '<br/>';

    array_splice($numbers, 2, 1, 3);
    print_r($numbers);
    echo '<br/>';
    array_splice($numbers, 3, 2);
    print_r($numbers);
    echo '<br/>';
    array_splice($numbers, 1, 0, [10, 15, 19]);
    print_r($numbers);
    echo '<br/>';

    foreach ($numbers as $number) {
        $number = $number + 3;
        echo $number;
        echo '<br/>';
    }

    print_r($numbers);
    echo '<br/>';

    $student = [
        "name" => "Nevena",
        "age" => 25,
        "fn" => 88888
    ];

    var_dump($student);

    $student["name"] = "Georgi";
    echo "<br/>";
    print_r($student);
    echo '<br/>';

    $student["mark"] = 5.5;
    print_r($student);
    echo '<br/>';

    foreach($student as $key => $value) {
        echo "$key: $value";
        echo '<br/>';
    }
?>