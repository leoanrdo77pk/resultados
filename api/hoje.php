<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$apiToken = "akcVynHbiaaHghWOcBxW8JoeLWFPFeIdxyJ1HnoVz30EFwlDJRATNkMzXM1S";
$data = date('Y-m-d'); // Hoje

$url = "https://api.sportmonks.com/v3/football/fixtures/date/$data?api_token=$apiToken&include=teams;league;score;time";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo $response;

