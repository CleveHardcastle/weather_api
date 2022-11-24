var query = document.getElementById("form1");
var btn = document.getElementById("btn");
var towns = document.getElementById("towns");
var geoUrl =
  "http://api.openweathermap.org/geo/1.0/direct?&appid=99886c59c78ad6d91177b0fde1bce458&q=";
var cityUrl =
  "http://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=99886c59c78ad6d91177b0fde1bce458";

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
      console.log(data.list[3].main.temp);
      console.log(data.list[11].main.temp);
      console.log(data.list[19].main.temp);
      console.log(data.list[27].main.temp);
      console.log(data.list[35].main.temp);
    });

  var townName = userInput;
  var entry = document.createElement("li");
  entry.appendChild(document.createTextNode(townName));
  towns.appendChild(entry);
}

btn.addEventListener("click", getResults);
