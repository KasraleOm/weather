let cityName = document.getElementById("cityName");
let city1 = document.getElementById("city1");
let temp = document.getElementById("temp");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
async function fetchCityName()
{
    let city = cityName.value;
    if(city == "")
    {
        alert("Enter Your City Name");
    }
    else
    {
        let api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bc515184d1bae5be71e7728603b533d`;
        let data = await fetch(api);
        let dt = await(data.json());
        console.log(dt)
        city1.innerText = dt.name;
        temp.innerText = "Temp : "+((dt.main.temp)-273.15).toFixed(3)+"°C";
        humidity.innerText = "Humidity : "+dt.main.humidity+"%";
        wind.innerText = "Wind Speed : "+dt.wind.speed+"km/hr";
    }
    cityName.value = "";
}