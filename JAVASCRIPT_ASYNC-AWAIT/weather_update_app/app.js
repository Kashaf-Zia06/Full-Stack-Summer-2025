// Element selections
curr_loc = document.querySelector("#curr-loc")
loc = document.querySelector("#loc")
loading = document.querySelector(".load")
let inf = document.querySelector(".info")
let live_loc = document.querySelector("#live-loc");

// Get weather using current geolocation
live_loc.addEventListener("click", () => {
    loading.innerText = "Getting your location...";
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
});

// On success, fetch weather using latitude and longitude
async function successCallback(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    try {
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2dd25c77bdc14da995475955250703&q=${lat},${lon}&aqi=no`);
        let data = await response.json();

        loading.innerText = "";

        // Display weather info
        inf.innerHTML = `
            <p><strong>City:  </strong> ${data.location.name}</p>
            <p><strong>Region:  </strong> ${data.location.region}</p>
            <p><strong>Temperature in Celsius:  </strong> ${data.current.temp_c}°C</p>
            <p><strong>Temperature in Fahrenheit:  </strong> ${data.current.temp_f}°F</p>
            <p><strong>Feels like in Celsius:  </strong> ${data.current.feelslike_c}°C</p>
            <p><strong>Feels like in Fahrenheit:  </strong> ${data.current.feelslike_f}°F</p>
            <p><strong>Humidity Level:  </strong> ${data.current.humidity}%</p>
        `;
    } catch (error) {
        loading.innerText = "Error fetching weather.";
        inf.innerHTML = `<p style="color:red;">Something went wrong!</p>`;
    }
}

// If location access is denied or fails
function errorCallback(error) {
    loading.innerText = "";
    inf.innerHTML = `<p style="color:red;">Location access denied or unavailable. Please try manually.</p>`;
}

// Get weather by city name (manual input)
loc.addEventListener("click", () => {
    loc.classList.add("hidden")
    curr_loc.classList.add("hidden")

    let value = prompt("Enter City Name: ")
    loading.innerText = "Loading...."

    setTimeout(() => {
        getData1(value);
    }, 1000)
});

// Get weather by IP address (manual input)
curr_loc.addEventListener("click", () => {
    let ip = prompt("Enter IP address: ");
    loading.innerText = "Loading...."

    setTimeout(() => {
        getData2(ip);
    }, 1000)
});

// Fetch weather using city name
async function getData1(city) {
    loading.innerText = "";

    try {
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2dd25c77bdc14da995475955250703&q=${city}&aqi=no`)
        let data = await response.json()
        console.log(data)

        inf.innerHTML = `
            <p><strong>City:  </strong> ${data.location.name}</p>
            <p><strong>Region:  </strong> ${data.location.region}</p>
            <p><strong>Temperature in Celsius:  </strong> ${data.current.temp_c}°C</p>
            <p><strong>Temperature in Fahrenheit:  </strong> ${data.current.temp_f}°F</p>
            <p><strong>Feels like in Celsius:  </strong> ${data.current.feelslike_c}°C</p>
            <p><strong>Feels like in Fahrenheit:  </strong> ${data.current.feelslike_f}°F</p>
            <p><strong>Humidity Level:  </strong> ${data.current.humidity}%</p>
        `;
    }
    catch (error) {
        inf.innerHTML = `${error}`
    }
}

// Use IP to fetch city, then get weather by city
async function getData2(ip) {
    loading.innerText = "";

    let response = await fetch(`http://ip-api.com/json/${ip}`)
    let data = await response.json()

    getData1(data.city) // Pass city name from IP API response to getData1
}
