// alert("weather app")
// const key = 'wqsCNQaqWKLm7wj5vw2GdjoIyAdbVeVW';
const key = 'wnWpAjSm9dajv3YGkLoyz7lArAIm8KBt';
// console.log(key)
// /get weather info

const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query= `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];

}

// Get city info
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    // console.log(query)
    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
    // console.log(data[0]);
};

// getCity('milton').then(data => { 
// return getWeather(data.Key);}) 
// .then(data => {console.log(data);})
// .catch(err => console.log(err));

// getWeather("49553");