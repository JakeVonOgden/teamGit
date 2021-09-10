import React from 'react';

//location props passed as props.lat and props.lon

const Ticketmaster = (props) => {
    
    return(
    
        <div className="tm-container">
            <p>This is the Ticketmaster App</p>
            <p> Your latitude is {props.lat} and your longitude is {props.lon} </p>
        </div>
    
    )
}

export default Ticketmaster;