apiKey = "94a920448306213970b8240797e3ad07";
apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=";

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` + "&units=metric");
    var data = await response.json();

    const weatherIcon = document.querySelector(".weather-icon");


    console.log(data);

    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
    document.querySelector("#wind").innerHTML = data.wind.speed + "Km/H";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
    }


    document.querySelector(".weather").style.display = "block";


}

submmit.addEventListener("click", (e) => {
    e.preventDefault()
    checkweather(searchBox.value);
})

checkweather("Ahmedabad");

// //new York

// apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=New York";
// async function checkweather() {
//     const response = await fetch(apiUrl + `&appid=${apiKey}` + "&units=metric");
//     var data = await response.json();

//     const weatherIcon = document.querySelector(".weather-icon");


//     console.log(data);

//     document.querySelector("nycity").innerHTML = data.name;
//     document.querySelector("nytemp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector("nyhumidity").innerHTML = data.main.humidity + "%";
//     document.querySelector("nywind").innerHTML = data.wind.speed + "Km/H";

//     if (data.weather[0].main == "Clouds") {
//         weatherIcon.src = "images/clouds.png";
//     } else if (data.weather[0].main == "Clear") {
//         weatherIcon.src = "images/clear.png";
//     } else if (data.weather[0].main == "Rain") {
//         weatherIcon.src = "images/rain.png";
//     } else if (data.weather[0].main == "Drizzle") {
//         weatherIcon.src = "images/drizzle.png";
//     } else if (data.weather[0].main == "Mist") {
//         weatherIcon.src = "images/mist.png";
//     }
// }


// //Dubai
// apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=Dubai";
// async function checkweather() {
//     const response = await fetch(apiUrl + `&appid=${apiKey}` + "&units=metric");
//     var data = await response.json();

//     const weatherIcon = document.querySelector(".weather-icon");


//     console.log(data);

//     document.querySelector("dbcity").innerHTML = data.name;
//     document.querySelector("dbtemp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector("dbhumidity").innerHTML = data.main.humidity + "%";
//     document.querySelector("dbwind").innerHTML = data.wind.speed + "Km/H";

//     if (data.weather[0].main == "Clouds") {
//         weatherIcon.src = "images/clouds.png";
//     } else if (data.weather[0].main == "Clear") {
//         weatherIcon.src = "images/clear.png";
//     } else if (data.weather[0].main == "Rain") {
//         weatherIcon.src = "images/rain.png";
//     } else if (data.weather[0].main == "Drizzle") {
//         weatherIcon.src = "images/drizzle.png";
//     } else if (data.weather[0].main == "Mist") {
//         weatherIcon.src = "images/mist.png";
//     }
// }


// //Paris
// apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=France";
// async function checkweather() {
//     const response = await fetch(apiUrl + `&appid=${apiKey}` + "&units=metric");
//     var data = await response.json();

//     const weatherIcon = document.querySelector(".weather-icon");


//     console.log(data);

//     document.querySelector("frcity").innerHTML = data.name;
//     document.querySelector("frtemp").innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector("frhumidity").innerHTML = data.main.humidity + "%";
//     document.querySelector("frwind").innerHTML = data.wind.speed + "Km/H";

//     if (data.weather[0].main == "Clouds") {
//         weatherIcon.src = "images/clouds.png";
//     } else if (data.weather[0].main == "Clear") {
//         weatherIcon.src = "images/clear.png";
//     } else if (data.weather[0].main == "Rain") {
//         weatherIcon.src = "images/rain.png";
//     } else if (data.weather[0].main == "Drizzle") {
//         weatherIcon.src = "images/drizzle.png";
//     } else if (data.weather[0].main == "Mist") {
//         weatherIcon.src = "images/mist.png";
//     }
// }