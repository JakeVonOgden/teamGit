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
    
    
    const [eventName2, setEventName2] = useState("");
    const [eventDate2, setEventDate2] = useState("");
    const [eventVenue2, setEventVenue2] = useState("");
    const [eventTime2, setEventTime2] = useState("");

    const [eventName3, setEventName3] = useState("");
    const [eventDate3, setEventDate3] = useState("");
    const [eventVenue3, setEventVenue3] = useState("");
    const [eventTime3, setEventTime3] = useState("");

    const [eventName4, setEventName4] = useState("");
    const [eventDate4, setEventDate4] = useState("");
    const [eventVenue4, setEventVenue4] = useState("");
    const [eventTime4, setEventTime4] = useState("");

    const [eventName5, setEventName5] = useState("");
    const [eventDate5, setEventDate5] = useState("");
    const [eventVenue5, setEventVenue5] = useState("");
    const [eventTime5, setEventTime5] = useState("");
    
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
            setEventName2(data._embedded.events[1].name);
            setEventName3(data._embedded.events[2].name);
            setEventName4(data._embedded.events[3].name);
            setEventName5(data._embedded.events[4].name);
            
            
            
            setEventDate(data._embedded.events[0].dates.start.localDate);
            setEventDate2(data._embedded.events[1].dates.start.localDate);
            setEventDate3(data._embedded.events[2].dates.start.localDate);
            setEventDate4(data._embedded.events[3].dates.start.localDate);
            setEventDate5(data._embedded.events[4].dates.start.localDate);

            
            
            setEventTime(data._embedded.events[0].dates.start.localTime);
            setEventTime2(data._embedded.events[1].dates.start.localTime);
            setEventTime3(data._embedded.events[2].dates.start.localTime);
            setEventTime4(data._embedded.events[3].dates.start.localTime);
            setEventTime5(data._embedded.events[4].dates.start.localTime);

            setEventVenue(data._embedded.events[0]._embedded.venues[0].name);
            setEventVenue2(data._embedded.events[1]._embedded.venues[0].name);
            setEventVenue3(data._embedded.events[2]._embedded.venues[0].name);
            setEventVenue4(data._embedded.events[3]._embedded.venues[0].name);
            setEventVenue5(data._embedded.events[4]._embedded.venues[0].name);
          });
      };
      fetchEvents();
    },[props.lat,props.lon])

    return(
        <div >
            <Container>
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
                    <tr>
                        <td>{eventName2}</td>
                        <td>{eventDate2}</td>
                        <td>{eventTime2}</td>
                        <td>{eventVenue2}</td>
                    </tr>
                    <tr>
                        <td>{eventName3}</td>
                        <td>{eventDate3}</td>
                        <td>{eventTime3}</td>
                        <td>{eventVenue3}</td>
                    </tr>
                    <tr>
                        <td>{eventName4}</td>
                        <td>{eventDate4}</td>
                        <td>{eventTime4}</td>
                        <td>{eventVenue4}</td>
                    </tr>
                    <tr>
                        <td>{eventName5}</td>
                        <td>{eventDate5}</td>
                        <td>{eventTime5}</td>
                        <td>{eventVenue5}</td>
                    </tr>
                </tbody>
        </Table>
        </Container>
        </div>
    )
}

export default Ticketmaster;