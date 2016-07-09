<?php
    $tags = $_GET["t1"];
    $list = array();
    $i = 0;
    foreach ($tags as $x) {
        $list[$i] = $x;
        $i++;
    }
    echo json_encode($list);
?>