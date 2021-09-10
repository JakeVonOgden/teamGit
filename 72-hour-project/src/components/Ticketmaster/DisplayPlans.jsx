
const DisplayPlans = props => {

    return(
    <div>
            {
                props.plan.map((plan, key) => {
                    return(
                        <tr key={key}>
                            <td>{plan.events.name}</td>
                            <td>{plan.events.dates.start.localDate}</td>
                            <td>{plan.events.dates.start.localTime}</td>
                            <td>{plan.events._embedded.venues[0].name}</td>
                        </tr>
                    )
                })
            }
    </div>
    )

}

export default DisplayPlans;


// const PlansList = (props) => {

// const [plans, setPlans] = useState([]);

// const fetchPlans = () => 

//    fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=CA1cwhPCw1rRVfVcCHRBUxbhD23mPaNp')
//     .then(res => res.json())
//     .then(result => {
//       setPlans(result);
//       console.log(result);
//     });

// useEffect(() => {
//     fetchPlans();
// }, [])

// return(
//     <>
//     <h3>Events Near Me</h3>
//     <hr />
//     <Table striped>
//         <thead>
//             <tr>
//                 <th>Event</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Venue</th>
//             </tr>
//         </thead>

//     </Table>
//     </>
// )
// }

// export default PlansList;