<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$apiToken = "akcVynHbiaaHghWOcBxW8JoeLWFPFeIdxyJ1HnoVz30EFwlDJRATNkMzXM1S";
$date = date('Y-m-d'); // jogos de hoje

$url = "https://api.sportmonks.com/v3/football/fixtures?api_token=$apiToken&include=teams;league;score&filters[date]=$date";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo $response;

