// console.log("city app");

const cityValue = document.querySelector('form');
const card= document.querySelector('.card');
const details = document.querySelector('.details');

const dayTime = document.querySelector('img.day-time');

const updateUi = (data) => {
    const cityInfo = data.cityInfo;
    const weather = data.weather;


    details.innerHTML = `
        <h4 class="card-title my-2 text-muted">${cityInfo.EnglishName}</h4>
              <p class="card-text text-muted">${weather.WeatherText}</p>
              <div class="display-4 ">
                  <span>${weather.Temperature.Metric.Value}</span>
                  <span>&deg;</span>
                </div>
            </div>
    `
    let daytimeSrc = null;
    if(weather.IsDayTime){
        daytimeSrc = 'day-time.jpg';
        console.log("day time");
    }else{
        daytimeSrc = 'night-time.jpg';
    }
    dayTime.setAttribute('src', daytimeSrc)
}

const updateCity = async (city) =>{
    const cityInfo = await getCity(city);
    const weather = await getWeather(cityInfo.Key);
    return {
        // cityInfo:cityInfo,
        // weather:weather
        cityInfo,
        weather
    }
}

cityValue.addEventListener('submit', e=>{
    e.preventDefault();

    const city = cityValue.city.value.trim();
    cityValue.reset();


    // updateCity(city).then(data => console.log(data))
    // .catch(err => console.log(err));

    updateCity(city).then(data => {updateUi(data); console.log(data)})
    .catch(err => console.log(err));
})

