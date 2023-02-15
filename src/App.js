import './App.css';
import WeatherCard from './components/WeatherCard';
import { useState } from 'react';
import { fetchWeather } from './components/WeatherApi';

function App() {
  const [city, setCity] = useState('')
  const [updatedCity, setUpdatedCity] = useState(city)
  const [weather, setWeather] = useState(null)

  const handelClick = () => {
    setUpdatedCity(city)
  }
  const handelChange = (event) => {
    setCity(event.target.value)
  }

  const fetch = async (event) => {
    event.preventDefault()
    try {
      const latest_weather = await fetchWeather(updatedCity)
      setWeather(latest_weather)
    } catch (error) {
      return error
    }
  }
console.log(process.env.REACT_APP_API_KEY);

  return (
    <>
      <div className="container ">
        <form onSubmit={fetch}>
          <input type='text' placeholder='Enter City Name' onChange={handelChange} value={city} />
          <button type="submit" className="btn btn-info" onClick={handelClick} >Search</button>
        </form>
        <WeatherCard weather={weather} />
      </div>
    </>
  );
}

export default App;
