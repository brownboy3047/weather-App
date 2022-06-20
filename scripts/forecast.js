//get the weather api from https://developer.accuweather.com/
const myApikey = 'ghWlfGsySQH1nfIFASiyFkBr71Ba2Ibc';

const getWeather = async (locationKey) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';

    const query = `${locationKey}?apikey=${myApikey}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0];
};


const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${myApikey}&q=${city}`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data[0];

};