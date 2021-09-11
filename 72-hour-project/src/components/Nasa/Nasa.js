import {useState, useEffect} from 'react';


//location props passed as props.lat and props.lon

const Nasa = (props) => {

    const [satelliteImage, setSatelliteImage] = useState("");
    const url = `https://api.nasa.gov/planetary/earth/imagery`;
    const Api_key = `OCDsJmqY5mZiGxT9fHareLaVym0Bdc4wfT5qu6JZ`;

    useEffect(() => {
        const fetchIndy = async () => {
            if(props.lon !== 0 && props.lat !== 0){

                let baseUrl = `${url}?lon=${props.lon}&lat=${props.lat}&date=2021-09-10&api_key=${Api_key}`
               await fetch(baseUrl)
                    .then((res) => {
                        console.log(res);
                        setSatelliteImage(res.url);
                    })
            }
        }
            
    fetchIndy();
}, [props.lat, props.lon])
       
    return(
        
        <div className="nasa-container">
            
            <p>This is the Nasa app</p>
            <img style={{width:"600px", width:"600px"}} src={satelliteImage} alt=""/>
            <p>This is an image of Indianapolis, Indiana.</p>
        
        </div>
    )
}

export default Nasa;