"use strict";

const URL = 'https://api.openweathermap.org/data/2.5/onecall'

function mapDisplay(lat = 29.426827, lon = -98.489615) {
    $.get(URL, {
        APPID: OPEN_WEATHER_API_KEY,
        lat: lat,
        lon: lon,
        units: "imperial"
    }).done(function (results) {
        console.log(results);
        console.log(results.daily[0].dt);
        console.log(results.daily[0].weather[0].icon);
        const MARKER = new mapboxgl.Marker()
            .setLngLat([lon, lat])
            .setDraggable(true)
            .addTo(map);
        reverseGeocode({lat: results.lat, lng: results.lon}, MAPBOX_API_KEY).then(function (data) {
            console.log(data);
            $('#current-city').html('Current City: ' + data)
        })

        function setBack() {
            if (results.daily[0].weather[0].description.includes('rain')) {
                $('body').css('background-image', "url(../img/rainy.gif)")
                map.setStyle('mapbox://styles/mapbox/navigation-night-v1')
            } else if (results.daily[0].weather[0].description.includes('clear')) {
                $('body').css('background-image', "url(../img/sunny.gif)")
                map.setStyle('mapbox://styles/mapbox/navigation-day-v1')
            } else if (results.daily[0].weather[0].description.includes('sun')) {
                $('body').css('background-image', "url(../img/sunny.gif)")
                map.setStyle('mapbox://styles/mapbox/navigation-day-v1')
            } else if (results.daily[0].weather[0].description.includes('cloud')) {
                $('body').css('background-image', "url(../img/cloudy.gif)")
                map.setStyle('mapbox://styles/mapbox/dark-v10')
            } else if (results.daily[0].weather[0].description.includes('snow')) {
                $('body').css('background-image', "url(../img/snowing.gif)")
                map.setStyle('mapbox://styles/mapbox/light-v10')
            }
        };

        setBack();

        let day1 = new Date(results.daily[0].dt * 1000);
        $('#day-1').children().first().html(day1.toDateString());
        $('#day-1').children().first().css('text-align', 'center');
        $('#day-1').children().children().first().html('<span class="fw-bold">' + results.daily[0].temp.min + '??F / ' + results.daily[0].temp.max + '??F </span>' + '<br>' + '<img src="" id="icon-1">')
        $('#icon-1').attr('src', "http://openweathermap.org/img/wn/" + results.daily[0].weather[0].icon + "@2x.png")
        $('#day-1').children().children().first().css('text-align', 'center')
        $('#day-1').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[0].weather[0].description + '</span>')
        $('#day-1').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[0].humidity + '%' + '</span>')
        $('#day-1').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[0].wind_speed + ' mph' + '</span>')
        $('#day-1').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + (results.daily[0].pressure / 30).toFixed(2) + ' inHg' + '</span>')
        let day2 = new Date(results.daily[1].dt * 1000);
        $('#day-2').children().first().html(day2.toDateString());
        $('#day-2').children().first().css('text-align', 'center');
        $('#day-2').children().children().first().html('<span class="fw-bold">' + results.daily[1].temp.min + '??F / ' + results.daily[1].temp.max + '??F </span>' + '<br>' + '<img src="" id="icon-2">')
        $('#icon-2').attr('src', "http://openweathermap.org/img/wn/" + results.daily[1].weather[0].icon + "@2x.png")
        $('#day-2').children().children().first().css('text-align', 'center')
        $('#day-2').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[1].weather[0].description + '</span>')
        $('#day-2').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[1].humidity + '%' + '</span>')
        $('#day-2').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[1].wind_speed + ' mph' + '</span>')
        $('#day-2').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + (results.daily[1].pressure / 30).toFixed(2) + ' inHg' + '</span>')
        let day3 = new Date(results.daily[2].dt * 1000);
        $('#day-3').children().first().html(day3.toDateString());
        $('#day-3').children().first().css('text-align', 'center');
        $('#day-3').children().children().first().html('<span class="fw-bold">' + results.daily[2].temp.min + '??F / ' + results.daily[2].temp.max + '??F </span>' + '<br>' + '<img src="" id="icon-3">')
        $('#icon-3').attr('src', "http://openweathermap.org/img/wn/" + results.daily[2].weather[0].icon + "@2x.png")
        $('#day-3').children().children().first().css('text-align', 'center')
        $('#day-3').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[2].weather[0].description + '</span>')
        $('#day-3').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[2].humidity + '%' + '</span>')
        $('#day-3').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[2].wind_speed + ' mph' + '</span>')
        $('#day-3').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + (results.daily[2].pressure / 30).toFixed(2) + ' inHg' + '</span>')
        let day4 = new Date(results.daily[3].dt * 1000);
        $('#day-4').children().first().html(day4.toDateString());
        $('#day-4').children().first().css('text-align', 'center');
        $('#day-4').children().children().first().html('<span class="fw-bold">' + results.daily[3].temp.min + '??F / ' + results.daily[3].temp.max + '??F </span>' + '<br>' + '<img src="" id="icon-4">')
        $('#icon-4').attr('src', "http://openweathermap.org/img/wn/" + results.daily[3].weather[0].icon + "@2x.png")
        $('#day-4').children().children().first().css('text-align', 'center')
        $('#day-4').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[3].weather[0].description + '</span>')
        $('#day-4').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[3].humidity + '%' + '</span>')
        $('#day-4').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[3].wind_speed + ' mph' + '</span>')
        $('#day-4').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + (results.daily[3].pressure / 30).toFixed(2) + ' inHg' + '</span>')
        let day5 = new Date(results.daily[4].dt * 1000);
        $('#day-5').children().first().html(day5.toDateString());
        $('#day-5').children().first().css('text-align', 'center');
        $('#day-5').children().children().first().html('<span class="fw-bold">' + results.daily[4].temp.min + '??F / ' + results.daily[4].temp.max + '??F </span>' + '<br>' + '<img src="" id="icon-5">')
        $('#icon-5').attr('src', "http://openweathermap.org/img/wn/" + results.daily[4].weather[0].icon + "@2x.png")
        $('#day-5').children().children().first().css('text-align', 'center')
        $('#day-5').children().children().first().next().html('Description: ' + '<span class="fw-bold">' + results.daily[4].weather[0].description + '</span>')
        $('#day-5').children().children().first().next().next().html('Humidity: ' + '<span class="fw-bold">' + results.daily[4].humidity + '%' + '</span>')
        $('#day-5').children().children().first().next().next().next().html('Wind Speed: ' + '<span class="fw-bold">' + results.daily[4].wind_speed + ' mph' + '</span>')
        $('#day-5').children().children().first().next().next().next().next().html('Pressure: ' + '<span class="fw-bold">' + (results.daily[4].pressure / 30).toFixed(2) + ' inHg' + '</span>')
    })
}

mapDisplay();
$('#search-btn').click(function () {
    geocode($('#search-input').val(), MAPBOX_API_KEY).then(function (data) {
        console.log(data);
        const ll = new mapboxgl.LngLat(data[0], data[1]);
        map.flyTo({center: [data[0], data[1]]})
        const NewMARKER = new mapboxgl.Marker()
            .setLngLat([data[0], data[1]])
            .addTo(map);
        mapDisplay(data[1], data[0]);
        reverseGeocode({lat: data[1], lng: data[0]}, MAPBOX_API_KEY).then(function (data) {
            $('#current-city').html('Current City: ' + data)
        })
    })
})