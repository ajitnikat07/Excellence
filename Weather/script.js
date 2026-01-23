// ===== JAVASCRIPT TEMPERATURE FINDER APP =====
// This app fetches real weather data from an API and displays temperature

// ===== 1. GET REFERENCES TO HTML ELEMENTS =====
// This is like getting pointers to the elements we want to interact with

const cityInput = document.getElementBy('cityInput');        
// Input field for city name

const searchBtn = document.getElementBy('searchBtn');        
// Search button

const weatherInfo = document.getElementBy('weatherInfo');    
// Container for weather data

const loading = document.getElementBy('loading');            
// Loading indicator

const error = document.getElementById('error');        

// Weather data display elements
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');


// ===== 2. ADD EVENT LISTENERS =====
// Event listeners trigger functions when something happens (like clicking a button)

searchBtn.addEventListener('click', handleSearch);       
cityInput.addEventListener('keypress', (event) => {     
    if (event.key === 'Enter') {                              // If the key is 'Enter'
        handleSearch();               
    }
});


// ===== 3. MAIN FUNCTION: handleSearch =====
// This function runs when user searches for a city

function handleSearch() {
    const city = cityInput.value.trim();                      // Get the input value and remove spaces
    
    // Validation: Check if user entered something
    if (city === '') {
        showError('Please enter a city name');                // Show error if empty
        return;                                               // Stop execution
    }

    // Hide previous results and errors
    error.style.display = 'none';                             // Hide error div
    weatherInfo.style.display = 'none';                       // Hide weather info div
    loading.style.display = 'block';                          // Show loading div

    // Call function to fetch weather data
    fetchWeatherData(city);
}


// ===== 4. FUNCTION: fetchWeatherData =====
// This function gets the coordinates of a city, then fetches weather data

async function fetchWeatherData(city) {
    try {
        // STEP 1: Get coordinates (latitude, longitude) of the city
        // We use Geocoding API to convert city name to coordinates
        
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
        
        // Explanation of async/await:
        // - fetch() is asynchronous (takes time to get response)
        // - await waits for the fetch to complete
        // - response is the data we get back
        
        const geoResponse = await fetch(geoUrl);              // Request to Geocoding API
        const geoData = await geoResponse.json();             // Convert response to JSON
        
        // Check if API returned results
        if (!geoData.results || geoData.results.length === 0) {
            throw new Error('City not found!');               // Throw error if no results
        }

        // Extract coordinates from the first result
        const location = geoData.results[0];                  // Get first matching city
        const latitude = location.latitude;                   // Get latitude
        const longitude = location.longitude;                 // Get longitude
        const displayName = location.name;                    // Get city name to display

        // STEP 2: Get weather data using coordinates
        // Now we use these coordinates to fetch actual weather information
        
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=celsius`;
        
        const weatherResponse = await fetch(weatherUrl);      // Request to Weather API
        const weatherData = await weatherResponse.json();     // Convert response to JSON
        
        // Extract current weather from the response
        const current = weatherData.current;                  // Get current weather object
        
        // Display the weather data
        displayWeather(displayName, current);                 // Pass data to display function
        
        // Hide loading indicator
        loading.style.display = 'none';
        
    } catch (err) {
        // If anything goes wrong, show error message
        loading.style.display = 'none';
        showError(err.message);
    }
}


// ===== 5. FUNCTION: displayWeather =====
// This function updates the HTML with weather data

function displayWeather(city, current) {
    // Update the HTML elements with actual data
    
    cityName.textContent = city + ', Weather Information';      // Display city name
    temperature.textContent = Math.round(current.temperature_2m);  // Round temperature to whole number
    humidity.textContent = current.relative_humidity_2m + '%';  // Add % symbol to humidity
    windSpeed.textContent = current.wind_speed_10m + ' km/h';   // Add unit to wind speed
    
    // Get weather description based on weather code
    description.textContent = getWeatherDescription(current.weather_code);
    
    // Show the weather info container
    weatherInfo.style.display = 'block';
    
    // Clear input field
    cityInput.value = '';
}


// ===== 6. FUNCTION: getWeatherDescription =====
// This function converts weather codes to human-readable descriptions

function getWeatherDescription(code) {
    // Weather codes and their meanings (from Open-Meteo API)
    const weatherCodes = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Foggy with rime',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        71: 'Slight snow',
        73: 'Moderate snow',
        75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Slight rain showers',
        81: 'Moderate rain showers',
        82: 'Violent rain showers',
        85: 'Slight snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with slight hail',
        99: 'Thunderstorm with heavy hail'
    };
    
    // Return the description for this code, or 'Unknown' if code not found
    return weatherCodes[code] || 'Unknown weather';
}


// ===== 7. FUNCTION: showError =====
// This function displays error messages to the user

function showError(message) {
    error.textContent = message;                              // Set error text
    error.style.display = 'block';                            // Show error div
    weatherInfo.style.display = 'none';                       // Hide weather info
    loading.style.display = 'none';                           // Hide loading indicator
}


// ===== KEY JAVASCRIPT CONCEPTS USED =====
// 1. DOM Manipulation: document.getElementById(), .textContent, .style.display
// 2. Event Listeners: addEventListener('click'), addEventListener('keypress')
// 3. Functions: Regular functions and arrow functions
// 4. Async/Await: For handling asynchronous API calls
// 5. Try/Catch: For error handling
// 6. Fetch API: For making HTTP requests to external APIs
// 7. JSON: For parsing data from APIs
// 8. Objects: Storing and accessing weather data
// 9. Conditionals: if/else for validation
// 10. String Manipulation: template literals with backticks for URLs
