<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$apiToken = "akcVynHbiaaHghWOcBxW8JoeLWFPFeIdxyJ1HnoVz30EFwlDJRATNkMzXM1S";

// Busca entre amanhã e 3 dias à frente
$dataInicio = date('Y-m-d', strtotime('+1 day'));
$dataFim = date('Y-m-d', strtotime('+3 days'));

$url = "https://api.sportmonks.com/v3/football/fixtures/between/$dataInicio/$dataFim?api_token=$apiToken&include=teams;league;score;time";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

echo $response;

