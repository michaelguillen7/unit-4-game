var wins = 0;
var losses = 0;
var Total = 0;

var crystalArry = [];
for (var i = 0; i < 4; i++) {
    crystalArry.push(Math.floor(Math.random() * 12) + 1);
}
console.log(crystalArry)

var randomNumberGenerator = Math.floor((Math.random() * 120) + 19);
console.log("Number to Reach: " + randomNumberGenerator);

$('#WinsNumber').html("Wins: " + wins);
$('#LosesNumber').html("Losses: " + losses);
$('#randomNumber').html("Number to Reach: " + randomNumberGenerator);