import React from 'react';

//location props passed as props.lat and props.lon

const Weather = (props) => {
    
    return(
        
        <div className="w-container">
            <p>This is the Weather App</p>
            <p>Your latitude is {props.lat} and your longitude is {props.lon}</p>
        </div>
    )
}

export default Weather;