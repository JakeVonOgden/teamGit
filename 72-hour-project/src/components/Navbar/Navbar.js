import React from 'react';
import Ticketmaster from '../Ticketmaster/Ticketmaster';
import Weather from '../Weather/Weather';
import Nasa from '../Nasa/Nasa';



const Navbar = (props) => {
    
    return(
        
        <div>
            
            <h1><strong>This will be where we link our components</strong></h1>
            {<Ticketmaster lat={props.lat} lon={props.lon}/>}
            <Weather lat={props.lat} lon={props.lon} />
            <Nasa lat={props.lat} lon={props.lon} />
        
        </div>
    ) 
}


export default Navbar;