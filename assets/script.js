var query = document.getElementById("form1");
var btn = document.getElementById("btn");
var towns = document.getElementById("towns");
var geoUrl =
  "https://api.openweathermap.org/geo/1.0/direct?&appid=99886c59c78ad6d91177b0fde1bce458&q=";
var cityUrl =
  "https://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=99886c59c78ad6d91177b0fde1bce458";

const d = new Date();
let day = d.getDate();
let month = d.getMonth() + 1;
var dayMonth = month + "/" + day;
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");

card1.textContent = month + "/" + (day + 1);
card2.textContent = month + "/" + (day + 2);
card3.textContent = month + "/" + (day + 3);
card4.textContent = month + "/" + (day + 4);


function getResults() {
  userInput = query.value;

  fetch(geoUrl + userInput)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      lat = "&lat=" + data[0].lat;
      lon = "&lon=" + data[0].lon;
      return fetch(cityUrl + lat + lon);
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("today").textContent = userInput + "'s Weather today " + dayMonth + ": " + data.list[3].main.temp + "°F " + " Humidity: " + data.list[3].main.humidity + "% " + " Wind Speeds: " + data.list[3].wind.speed + "MPH";
      document.getElementById("text1").textContent = "Temp: " + data.list[11].main.temp + "°F " + " Humidity: " + data.list[11].main.humidity + "% " + " Wind Speeds: " + data.list[11].wind.speed + "MPH";
      document.getElementById("text2").textContent = "Temp: " + data.list[19].main.temp + "°F " + " Humidity: " + data.list[19].main.humidity + "% " + " Wind Speeds: " + data.list[19].wind.speed + "MPH";
      document.getElementById("text3").textContent = "Temp: " + data.list[27].main.temp + "°F " + " Humidity: " + data.list[27].main.humidity + "% " + " Wind Speeds: " + data.list[27].wind.speed + "MPH";
      document.getElementById("text4").textContent = "Temp: " + data.list[35].main.temp + "°F " + " Humidity: " + data.list[35].main.humidity + "% " + " Wind Speeds: " + data.list[35].wind.speed + "MPH";
    });
}



btn.addEventListener("click", getResults);
