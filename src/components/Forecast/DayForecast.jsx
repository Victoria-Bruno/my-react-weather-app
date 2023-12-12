import "./DayForecast.css"

export const DayForecast = ({forecast}) => {

    const day = (timestamp) => {
        let date = new Date(timestamp * 1000);
        let day = date.getDay();
    
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
        return days[day];
    }

return <div className = "ForecastGrid">
    <div className="col">
            {forecast.filter((item, index) => index < 5).map(
                (temperature, index) => <div className="row" key={index}>
                    <div className="ForecastDay">{day(temperature.dt)}</div>
                    <img src={`https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`} alt={`${temperature.weather[0].description}`} />
                    <div className="temperature">{Math.round(temperature.temp.min)} - {Math.round(temperature.temp.max)} °C </div>
                    </div>)
                    }
    </div>
</div>
}