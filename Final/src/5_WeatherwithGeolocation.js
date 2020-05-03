

/*
Clock.
Username Persistance.
To Do List.
Random Background Image.
Weather with Geolocation. 
*/
const API_KEY="bc8f208eadfc868c3602904aab5fe27d";
const COORDS='coords';
const weather = document.querySelector(".WeatherZone");

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        const skyCondition = json.weather[0].main;
        const nation = json.sys.country;
        weather.innerText=`${skyCondition} ${temperature}℃ 
        @${place} in ${nation}`;
    });
}

function handleGeoError(){
    console.log('Cant access geo location!');
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){ 
    const latitude =position.coords.latitude;
    const longitude =position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, latitude);
}


function askForCoords(){
    navigator.geolocation.watchPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoords= localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        console.log(parsedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude); 
    }
}

function init(){
    loadCoords();
}
 init();

