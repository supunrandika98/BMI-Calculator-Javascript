function main () {
  var height = parseFloat(document.getElementById('Height').value);
  var weight = parseFloat(document.getElementById('Weight').value);

  var bmi = weight / (height/100)**2;
  bmi = bmi.toFixed(2);

  if (bmi > 0 && bmi <= 15) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>very severely underweight</span>.';
  } else if (bmi > 15 && bmi <= 16) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>severely underweight</span>.';
  } else if (bmi > 16 && bmi <= 18.5) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Underweight</span>.';
  } else if (bmi > 18.5 && bmi <= 25) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Normal (healthy weight)</span>.';
  } else if (bmi > 25 && bmi <= 30) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Overweight</span>.';
  } else if (bmi > 30 && bmi <= 35) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Obese Class I (Moderately obese)</span>.';
  } else if (bmi > 35 && bmi <= 40) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b></b><br>Your weight is <span>Obese Class II (Severely obese)</span>.';
  } else if (bmi > 40 && bmi <= 45) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Obese Class III (Very severely obese)</span>.';
  } else if (bmi > 45 && bmi <= 50) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Obese Class IV (Morbidly Obese)</span>.';
  } else if (bmi > 50 && bmi <= 60) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Obese Class V (Super Obese)</span>.';
  } else if (bmi > 60) {
    document.getElementById('output').innerHTML = 'Your BMI is : <b>' + bmi + '</b><br>Your weight is <span>Obese Class VI (Hyper Obese)</span>.';
  } else {
    document.getElementById('output').innerHTML = 'Please type valid numbers.';
  }
}