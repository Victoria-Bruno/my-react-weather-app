import { useState } from "react";
import "./Weather.css"
import Card from 'react-bootstrap/Card';
import Unit from "../Unit/Unit";

const Weather = (props) => {

    return (
        <Card style={{width: "18rem"}} className="Weather">
        <Card.Body>
        <Card.Title className="city">{props.data.city}</Card.Title>
        <Card.Subtitle>{props.data.dayWeek} {props.data.time}</Card.Subtitle>      
        <Unit celsiusTemperature={props.data.temperature} />
        <img src={props.data.icon} alt="cloud" />
        <p className="additional-information">
         Weather Condition: <span>{props.data.description}</span>
        <br />
        Wind: <span>{props.data.wind}</span>km/h
        <br />
        Humidity: <span>{props.data.humidity}</span>%
         </p>
        </Card.Body>
        </Card>
        );
}

export default Weather;