function convertTemp() {
  const value = parseFloat(document.getElementById("tempInput").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");

  const title = document.querySelector("h1");

  if (isNaN(value)) {
    resultDiv.innerText = "Please enter a valid number.";
    resultDiv.style.color = "#ff6b6b";
    document.body.style.backgroundImage = "";

    
    title.style.color = "#ffffff";
    title.style.fontFamily = "inherit";
    return;
  }

  let celsius;
  if (from === "F") celsius = (value - 32) * 5 / 9;
  else if (from === "K") celsius = value - 273.15;
  else celsius = value;

  let result;
  if (to === "F") result = (celsius * 9 / 5) + 32;
  else if (to === "K") result = celsius + 273.15;
  else result = celsius;

  resultDiv.innerText = `Result: ${result.toFixed(2)} °${to}`;
  resultDiv.style.color = "#00ffcc";

  
  if (celsius < 10) {
    title.style.color = "#a0e9ff"; // icy blue
    title.style.fontFamily = "'Snowburst One', cursive";
  } else if (celsius >= 10 && celsius <= 25) {
    title.style.color = "#caffbf"; // mint green
    title.style.fontFamily = "'Rubik Doodle Shadow', cursive";
  } else {
    title.style.color = "#ff6b6b"; // hot red
    title.style.fontFamily = "'Bebas Neue', sans-serif";
  }

  
  setBackgroundImage(celsius);
}

function setBackgroundImage(celsius) {
  let bgUrl = "";

  if (celsius < 10) {
    bgUrl = "images/cold.jpg";
  } else if (celsius >= 10 && celsius <= 25) {
    bgUrl = "images/moderate.jpg";
  } else {
    bgUrl = "images/hot.jpg";
  }

  document.body.style.backgroundImage = `url('${bgUrl}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center";
  document.body.style.transition = "background-image 0.8s ease-in-out";
}