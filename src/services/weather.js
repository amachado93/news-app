import axios from 'axios';

//https://api.openweathermap.org/data/2.5/weather?zip=THE_USERS_ZIP_CODE_HERE,us&units=imperial&appid=0962293081cc023b431ef06db58213c7

const apiKey = "0962293081cc023b431ef06db58213c7";

export const fetchData = async (inputValue) => {
    // axios call
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${inputValue},us&units=imperial&appid=` + apiKey);

    
    // return
    return response;
    
}