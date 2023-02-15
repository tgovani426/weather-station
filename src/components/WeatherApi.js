import axios from "axios";





export async function fetchWeather(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;

    try {
        const response = await axios.get(URL)
        console.log(response.data);
        return response.data
    } catch (error) {
        return (error)
    }
}   
