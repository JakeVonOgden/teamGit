let plans;

const fetchEvents = () => {
    let url = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=CA1cwhPCw1rRVfVcCHRBUxbhD23mPaNp';

    fetch(url)
    .then(res => res.json())
    .then(function(json) {
        console.log(json[0])
        plans = json;
 
        console.log(plans[0]);

    // .catch(err => console.log(err))
})
};
fetchEvents();