import React, {useState, useEffect} from 'react';
import {Container, Table, Row, Col} from 'reactstrap';
import DisplayPlans from './DisplayPlans';



const PlansIndex = (props) => {

    const [plans, setPlans] = useState([]);

const fetchPlans = () => 

   fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=CA1cwhPCw1rRVfVcCHRBUxbhD23mPaNp')
    .then(res => res.json())
    .then(result => {
      setPlans(result);
      console.log(result);
    }).catch(err => console.log(err));

    useEffect(() => {
        fetchPlans();
    }, [])

    return(
        <div>
        <Container>
            <h3>Events Near You</h3>
            <hr />
            <Table striped>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Venue</th>
                    </tr>
                </thead>
                <tbody>
                    <DisplayPlans plan={plans} />
                </tbody>
            </Table>

            {/* <Row>
                <Col>
                    <PlansTable plans={plans}  fetchPlans={fetchPlans}/>
                </Col>
                
            </Row> */}
        </Container>
    
        </div>
    )
}

export default PlansIndex;