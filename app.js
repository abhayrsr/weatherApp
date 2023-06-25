const API_KEY = '57b9e94bf0807a16a282b0784abecce1';
const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');
//const API = 'https://api.openweathermap.org/data/2.5/{API_ENDPOINT}?{PARAMETERS}&appid={YOUR_API_KEY}';
const IMG_URL = 'http://openweathermap.org/img/wn/';

const getWeather = async(city) => {
    weather.innerHTML = `
    <div> 
    <h4>Loading...<h4>
    </div>
    `
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(response);
    return showWeather(data);
}

const showWeather = (data) => {
    if(data.cod == '404'){
        weather.innerHTML = `
        <div> 
        <h4>City not found<h4>
        </div>
        `
        return;
    }
    weather.innerHTML = `
            <div>
                <img src = "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt = "">
            </div>
            <div>
                <h2>${data.main.temp} °C</h2>
                <h4>${data.weather[0].main}</h4>
            </div> 
    `
}
form.addEventListener(
    "submit",
    function(event){
        const city  = search.value;
        getWeather(city);
        event.preventDefault();
    }
)