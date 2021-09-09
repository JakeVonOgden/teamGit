import React from 'react';


//location props passed as props.lat and props.lon

const Nasa = (props) => {
    
    return(
        
        <div className="nasa-container">
            
            <p>This is the Nasa app</p>
            <p>Your latitude is {props.lat} and your longitude is {props.lon}</p>
        
        </div>
    )
}

export default Nasa;