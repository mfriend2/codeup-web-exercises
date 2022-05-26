"use strict";

const URL = 'https://api.openweathermap.org/data/3.0/onecall'

$.get(URL, {
    APPID: OPEN_WEATHER_API_KEY,
    lat: 40.7485452,
    lon: -73.9879522,
    units: "imperial"
}).done(function (results) {
    console.log(results)
})
let today = new Date();
let tomorrow = today + 1;
window.onload = function () {
    $('#day-1').children().first().html(today.toDateString())
    $('#day-2').children().first().html(tomorrow)
}
