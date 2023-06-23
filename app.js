const API_KEY = '57b9e94bf0807a16a282b0784abecce1';
const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');
//const API = 'https://api.openweathermap.org/data/2.5/{API_ENDPOINT}?{PARAMETERS}&appid={YOUR_API_KEY}';
const IMG_URL = 'http://openweathermap.org/img/wn/';

const getWeather = async(city) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric';
    const response = await fetch(url);
    console.log(response);
}

form.addEventListener(
    "submit",
    function(event){
        console.log(search.value)
        event.preventDefault();
    }
)