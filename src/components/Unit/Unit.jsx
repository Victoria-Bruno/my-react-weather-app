import { useState } from "react";
import "../Unit/Unit.css"

const Unit = (props) => {
    const [temperature, setConversion] = useState(props.celsiusTemperature)
    const [unit, setUnit] = useState('celsius')

    function handleSelect(selectedUnit) {
        if (selectedUnit === 'fahrenheit') {
            event.preventDefault();
            setUnit('fahrenheit')
            setConversion(Math.round((props.celsiusTemperature * 9/5) + 32))
        } else if (selectedUnit === 'celsius'){
            event.preventDefault();
            setConversion(props.celsiusTemperature)
            }
    }

    return <div>
             <div className="temperature">{temperature}</div>
             <div className="units">
             <a onClick={() => handleSelect('celsius')} className='celsius 'href="/">°C</a> | 
             <a onClick={() => handleSelect('fahrenheit')} className='fahrenheit' href="/">°F</a>
             </div>
            </div>
}


export default Unit;