import "./Forecast.css"
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState } from "react";
import { DayForecast } from "./DayForecast";

const Forecast = (props) => {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    const saveResponseForecast = (response) => {
        setForecast(response.data.daily);
        setLoaded(true);
      }

useEffect(() => {
   setLoaded(false)}, [props.coordinates]);

  
    if (loaded) {  
        return (
        <Card style={{width: "18rem"}} className="Forecast">
        <Card.Body>
        <DayForecast forecast={forecast}/>
        </Card.Body>
        </Card>
        );
    } else {
        let apiKeyForecast= "432faae11d80945d94309124fca21dfb";
        let unit = 'metric'
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=${2}&units=${unit}&appid=${apiKeyForecast}`

        axios.get(apiUrlForecast).then(saveResponseForecast)
    }
}

export default Forecast;
