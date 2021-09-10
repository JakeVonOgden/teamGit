import React from 'react';
import PlansIndex from './PlansIndex';


//location props passed as props.lat and props.lon

const Ticketmaster = (props) => {
    
    return(
    
        <div className="tm-container">
            <p>This is the Ticketmaster App</p>
            <p> Your latitude is {props.lat} and your longitude is {props.lon} </p>
            <PlansIndex />
        
        </div>
    
    )
}

export default Ticketmaster;