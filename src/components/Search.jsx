import "./Search.css";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import axios from "axios";


const Search = () => {
  const [city, setCity] = useState(" ");
  const [weather, setWeather] = useState(" ");

  const handleInputCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
    console.log(event.target.value)
  };

  let apiKey= "559d4e8adbce809e1299cc093a978168";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(apiUrl).then(saveResponse);
  }

  const saveResponse = (response) => {
    setWeather(
      { temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      }
    )
    console.log(weather);
  }

    return (
    <Card style={{width: "18rem"}}  className="Search">
    <Form onSubmit={handleSubmit}>
      <Card.Body>
        <Card.Title>Search for weather</Card.Title>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter City Name"
          aria-label="Enter City Name"
          aria-describedby="basic-addon2"
          onChange={handleInputCity}
        />
        <Button variant="outline-secondary" id="button-addon2" >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </InputGroup>
      </Card.Body>
    </Form>
    </Card>
    );
};

export default Search;