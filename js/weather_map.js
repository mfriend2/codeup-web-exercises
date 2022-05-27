"use strict";

const URL = 'https://api.openweathermap.org/data/2.5/onecall'

$.get(URL, {
    APPID: OPEN_WEATHER_API_KEY,
    lat: 40.7485452,
    lon: -73.9879522,
    units: "imperial"
}).done(function (results) {
    console.log(results);
    console.log(results.daily[0].dt);
    console.log(results.daily[0].weather[0].icon);
    let day1 = new Date(results.daily[0].dt * 1000);
    $('#day-1').children().first().html(day1.toDateString());
    $('#day-1').children().children().first().html('<span class="fw-bold">' + results.daily[0].temp.min + '°F / ' + results.daily[0].temp.max + '°F </span>' + '<br>')
    $('#day-1').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[0].weather[0].description + '</span>')
    $('#day-1').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[0].humidity + '</span>')
    $('#day-1').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[0].wind_speed + '</span>')
    $('#day-1').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + results.daily[0].pressure + '</span>')
    let day2 = new Date(results.daily[1].dt * 1000);
    $('#day-2').children().first().html(day2.toDateString());
    $('#day-2').children().children().first().html('<span class="fw-bold">' + results.daily[1].temp.min + '°F / ' + results.daily[1].temp.max + '°F </span>' + '<br>')
    $('#day-2').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[1].weather[0].description + '</span>')
    $('#day-2').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[1].humidity + '</span>')
    $('#day-2').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[1].wind_speed + '</span>')
    $('#day-2').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + results.daily[1].pressure + '</span>')
    let day3 = new Date(results.daily[2].dt * 1000);
    $('#day-3').children().first().html(day3.toDateString());
    $('#day-3').children().children().first().html('<span class="fw-bold">' + results.daily[2].temp.min + '°F / ' + results.daily[2].temp.max + '°F </span>' + '<br>')
    $('#day-3').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[2].weather[0].description + '</span>')
    $('#day-3').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[2].humidity + '</span>')
    $('#day-3').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[2].wind_speed + '</span>')
    $('#day-3').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + results.daily[2].pressure + '</span>')
    let day4 = new Date(results.daily[3].dt * 1000);
    $('#day-4').children().first().html(day4.toDateString());
    $('#day-4').children().children().first().html('<span class="fw-bold">' + results.daily[3].temp.min + '°F / ' + results.daily[3].temp.max + '°F </span>' + '<br>')
    $('#day-4').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[3].weather[0].description + '</span>')
    $('#day-4').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[3].humidity + '</span>')
    $('#day-4').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[3].wind_speed + '</span>')
    $('#day-4').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + results.daily[3].pressure + '</span>')
    let day5 = new Date(results.daily[4].dt * 1000);
    $('#day-5').children().first().html(day5.toDateString());
    $('#day-5').children().children().first().html('<span class="fw-bold">' + results.daily[4].temp.min + '°F / ' + results.daily[4].temp.max + '°F </span>' + '<br>')
    $('#day-5').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[4].weather[0].description + '</span>')
    $('#day-5').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[4].humidity + '</span>')
    $('#day-5').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[4].wind_speed + '</span>')
    $('#day-5').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + results.daily[4].pressure + '</span>')
})
