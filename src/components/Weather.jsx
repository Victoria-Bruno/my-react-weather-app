import "./Weather.css"
import Card from 'react-bootstrap/Card';

export default function Weather() {
    let weatherData = {
      city: "Amsterdam",
      dayWeek: "Sunday",
      time: "18:30",
      temperature: 0,
      condition: "cloudy",
      wind: 3,
      humidity: 80,
      imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
    };


    return (
        <Card style={{width: "18rem"}} className="Weather">
        <Card.Body>
        <Card.Title>{weatherData.city}</Card.Title>
        <Card.Subtitle>{weatherData.dayWeek} {weatherData.time}</Card.Subtitle>
        <div className="temperature">{weatherData.temperature} <a href="/">°C</a> |<a href="/">°F</a></div>
        <img src={weatherData.imgUrl} alt="cloud" />
        <p className="additional-information">
            Weather Condition: <span>{weatherData.condition}</span>
            <br />
            Wind: <span>{weatherData.wind}</span>km/h
            <br />
            Humidity: <span>{weatherData.humidity}</span>%
            </p>
        </Card.Body>
        </Card>
    );
  }