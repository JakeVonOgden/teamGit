import React, {useState, useEffect} from 'react';
import {Container, Table} from 'reactstrap';
import Geohash from 'latlon-geohash';



//location props passed as props.lat and props.lon
const Ticketmaster = (props) => {

    const baseURL = "https://app.ticketmaster.com/discovery/v2/events.json";
    const API_KEY = "H7Dt31l1jNxQDlKluqGGSlIE2GDEJjil";
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventVenue, setEventVenue] = useState("");
    const [eventTime, setEventTime] = useState("");


    useEffect(() => {
    const fetchEvents = async () => {
        const hash = Geohash.encode(props.lat, props.lon, 6);
        console.log(hash)
        let url = `${baseURL}?size=5&geoPoint=${hash}&apikey=${API_KEY}`;
        
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            
            console.log(data);
            
            setEventName(data._embedded.events[0].name);
        
            setEventDate(data._embedded.events[0].dates.start.localDate);

            setEventTime(data._embedded.events[0].dates.start.localTime);
            
            setEventVenue(data._embedded.events[0]._embedded.venues[0].name);
          
          });
      };
      fetchEvents();
    },[props.lat,props.lon])
    
    return(
    
        <div >
            
            <h3>Events Near You</h3>
            <Table striped bordered hover variant="dark" responsive="md">
                
            <thead>
                <tr>
                    <th>Event</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Venue</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{eventName}</td>
                        <td>{eventDate}</td>
                        <td>{eventTime}</td>
                        <td>{eventVenue}</td>
                    </tr>
                </tbody>
            
        </Table>

        </div>
    )
}
export default Ticketmaster;