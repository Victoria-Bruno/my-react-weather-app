import "./Search.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import axios from "axios";
import Weather from "../Weather/Weather";


const Search = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ready: false});

  const saveResponse = (response) => {
    setWeatherData(
      { 
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      }
    )
    console.log(response)
  }

  const search = (event) => {
    let apiKey= "559d4e8adbce809e1299cc093a978168";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(saveResponse);
  }

  const handleCityChange = (event) => {
    setCity(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  }

  if (weatherData.ready) {
    return (
      <div>
    <Card style={{width: "18rem"}}  className="Search">
    <Form onSubmit={handleSubmit}>
      <Card.Body>
        <Card.Title>Search for weather</Card.Title>
        <InputGroup name="query" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter City Name"
          aria-label="Enter City Name"
          aria-describedby="basic-addon2"
          onChange={handleCityChange}
        />
        <Button type="submit" variant="outline-secondary" id="button-addon2" >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </InputGroup>
      </Card.Body>
    </Form>
    </Card>
    <Weather data={weatherData}/>
    </div>
    );
} else {
  search();
  return "Loading..."
}
}
export default Search;