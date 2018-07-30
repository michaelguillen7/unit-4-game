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

$("#one").attr("data-crystalvalue", crystalArry[0]);
$("#two").attr("data-crystalvalue", crystalArry[1]);
$("#three").attr("data-crystalvalue", crystalArry[2]);
$("#four").attr("data-crystalvalue", crystalArry[3]);

$("#one, #two, #three, #four").on("click", function(){
var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    Total += crystalValue;
    $('#finalTotal').html("Your Total Score Is: " + Total);
    console.log(crystalValue)
    
    if (Total === randomNumberGenerator) {
        alert("You win!");
        wins++;
        $('#WinsNumber').html("Wins: " + wins);
        reset()
    }
    else if (Total > randomNumberGenerator) {
        alert("You lose!");
        losses++;
        $('#LosesNumber').html("Losses: " + losses);
        reset()
    }
})