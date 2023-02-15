import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({ weather }) => {

    const weather_img_style = () => {
        if(weather){
            return ({marginLeft: 190})
        }
    }

    return (
        <div className="card">
            <img src={`icons/${weather ? (weather.weather[0].icon) : "unknown"}.png`} className="card-img" alt="Weather" style={weather_img_style()} />
            <div className="card-img-overlay">
                <h5 className="card-title">{weather ? (weather.name) : ''}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{weather ? (weather.sys.country) : ''}</h6>
                <p className="card-text">
                    {weather ? `${Math.round(weather.main?.temp - 273.15)}°C` : ''}
                
                </p>
            </div>


        </div>
    )
}
export default WeatherCard



