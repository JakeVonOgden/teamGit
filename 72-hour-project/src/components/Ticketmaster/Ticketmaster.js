import React, {useState, useEffect} from 'react';
import Geohash from 'latlon-geohash';
<<<<<<< HEAD
=======


>>>>>>> a36a5aa9be9b6a3215de05d7eb09ac7f822389fd
//location props passed as props.lat and props.lon
const Ticketmaster = (props) => {
<<<<<<< HEAD
    const baseURL = "https://app.ticketmaster.com/discovery/v2/events.json";
    const API_KEY = "H7Dt31l1jNxQDlKluqGGSlIE2GDEJjil";
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventVenue, setEventVenue] = useState("");
=======
    
    const baseURL = "https://app.ticketmaster.com/discovery/v2/events.json";
    const API_KEY = "H7Dt31l1jNxQDlKluqGGSlIE2GDEJjil";

    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventVenue, setEventVenue] = useState("");

>>>>>>> a36a5aa9be9b6a3215de05d7eb09ac7f822389fd
    useEffect(() => {
    const fetchEvents = async () => {
        const hash = Geohash.encode(props.lat, props.lon, 6);
        console.log(hash)
        let url = `${baseURL}?size=5&geoPoint=${hash}&apikey=${API_KEY}`;
<<<<<<< HEAD
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setEventName(data._embedded.events[0].name);
            setEventDate(data._embedded.events[0].dates.start.localDate);
            setEventVenue(data._embedded.events[0]._embedded.venues[0].name);
=======
        
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            
            console.log(data);
            
            setEventName(data._embedded.events[0].name);
        
            setEventDate(data._embedded.events[0].dates.start.localDate);
            
            setEventVenue(data._embedded.events[0]._embedded.venues[0].name);
          
>>>>>>> a36a5aa9be9b6a3215de05d7eb09ac7f822389fd
          });
      };
      fetchEvents();
    },[props.lat,props.lon])
<<<<<<< HEAD
    return(
        <div>
            <p>event: {eventName}</p>
            <p>eventDate: {eventDate}</p>
            <p>eventVenue: {eventVenue}</p>
=======
    
    return(
    
        <div>
            
            <p>event: {eventName}</p>
            <p>eventDate: {eventDate}</p>
            <p>eventVenue: {eventVenue}</p>
            
        
>>>>>>> a36a5aa9be9b6a3215de05d7eb09ac7f822389fd
        </div>
    )
}
export default Ticketmaster;