<?php

// Read input file
$input = file_get_contents('input.txt');
if ($input === false) {
    die("Error reading input file");
}

// Split into lines and clean
$lines = array_map('trim', explode(PHP_EOL, $input));

$solution = null;

/**
 * Implement the solution here
 */

echo $solution . PHP_EOL;
?>
