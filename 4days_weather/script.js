
document.addEventListener('DOMContentLoaded', function() {
    const cityInput = document.querySelector('.city-input');
    const searchBtn = document.querySelector('.search-btn');
    const weatherInfoSection = document.querySelector('.weather-info');
    const notFoundSection = document.querySelector('.not-found');
    const searchCitySection = document.querySelector('.search-city');
    const countryTxt = document.querySelector('.country-txt')
    const tempTxt = document.querySelector('.temp-txt')
    const conditionTxt = document.querySelector('.condition-txt')
    const humidityValueTxt = document.querySelector('.humidity-value-txt')
    const windValueTxt = document.querySelector('.wind-value-txt')
    const weatherSummaryImg = document.querySelector('.weather-summary-img')
    const currentDateTxt = document.querySelector('.current-date-txt')
    const forecastItemsContainer = document.querySelector('.forecast-items-container')

    const apiKey = '02a40491aff73865ff0e34ea1cc4e4a7';

    searchBtn.addEventListener('click', () => {
        if (cityInput.value.trim() !== ''){
            updateWeatherInfo(cityInput.value);
            cityInput.value = '';
            cityInput.blur();
        }
    });

    cityInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && cityInput.value.trim() !== '') {
            updateWeatherInfo(cityInput.value);
            cityInput.value = '';
            cityInput.blur();
        }
    });

    async function getFetchData(endPoint, city){
        const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;
        console.log("Fetching data from:", apiUrl); // Debugging line
        const response = await fetch(apiUrl);

        console.log("API Response:", response); // Debugging line
        return response.json();
    }

    function getWeatherIcon(id){
        if (id <= 232) return 'thunderstorm.svg'
        if (id <= 321) return 'drizzle.svg'
        if (id <= 531) return 'rain.svg'
        if (id <= 622) return 'snow.svg'
        if (id <= 781) return 'atmosphere.svg'
        if (id === 800) return 'clear.svg'
        else return 'clouds.svg'
    }

    function getCurrentDate(){
        const currentDate = new Date()
        const options = {
            weekday: 'short',
            day: '2-digit',
            month: 'short'
        }
        return currentDate.toLocaleDateString('en-GB', options)
    }

    async function updateWeatherInfo(city){
        const weatherData = await getFetchData('weather', city);
        console.log("Weather Data:", weatherData); // Debugging line

        if (weatherData.cod !== 200){
            showDisplaySection(notFoundSection);
            return;
        }
        console.log(weatherData)

        const{
            name: country,
            main: {temp, humidity},
            weather: [{id, main}],
            wind: { speed }
        } = weatherData

        countryTxt.textContent = country
        tempTxt.textContent = Math.round(temp) + '℃'
        conditionTxt.textContent = main
        humidityValueTxt.textContent = humidity + '%'
        windValueTxt.textContent = speed + 'M/s'

        currentDateTxt.textContent = getCurrentDate()
        console.log(getCurrentDate())
        weatherSummaryImg.src = `assets/weather/${getWeatherIcon(id)}`

        await updateForecastsInfo(city)
        showDisplaySection(weatherInfoSection);

        async function updateForecastsInfo(city){
            const forecastsData = await getFetchData('forecast', city)

            const timeTaken = '12:00:00'
            const todayDate = new Date().toISOString().split('T')[0]

            forecastItemsContainer.innerHTML = ''

            forecastsData.list.forEach(forecastWeather => { 
                if (forecastWeather.dt_txt.includes(timeTaken) && 
                !forecastWeather.dt_txt.includes(todayDate)) { 
                updateForecastsItems(forecastWeather); }
            })  
        }

        function updateForecastsItems(weatherData){
            console.log(weatherData)
            const{
                dt_txt: date,
                weather: [{ id }],
                main: { temp}
            } = weatherData

            const dateTaken = new Date(date);
            const dateOption = {
                day: '2-digit',
                month: 'short'
            }
            const dateResult = dateTaken.toLocaleDateString('en-US', dateOption)

            const forecastItem = `
            <div class="forecast-item">
                    <h5 class="forecast-item-date regular-txt">${dateResult}</h5>
                    <img src="assets/weather/${getWeatherIcon(id)}"  class="forecast-item-img">
                    <h5 class="forecast-item-temp">${Math.round(temp)} ℃</h5>
                </div>`

               forecastItemsContainer.insertAdjacentHTML('beforeend', forecastItem)
        }

        // Update your weather info here
        document.querySelector('.country-txt').textContent = weatherData.name;
        document.querySelector('.current-date-txt').textContent = new Date().toDateString();
        document.querySelector('.temp-txt').textContent = `${weatherData.main.temp} ℃`;
        document.querySelector('.condition-txt').textContent = weatherData.weather[0].main;
        document.querySelector('.humidity-value-txt').textContent = `${weatherData.main.humidity}%`;
        document.querySelector('.wind-value-txt').textContent = `${weatherData.wind.speed} M/s`;

        showDisplaySection(weatherInfoSection);
    }

    function showDisplaySection(section){
        [weatherInfoSection, searchCitySection, notFoundSection]
        .forEach(sec => sec.style.display = 'none');

        section.style.display = 'flex';
    }
});