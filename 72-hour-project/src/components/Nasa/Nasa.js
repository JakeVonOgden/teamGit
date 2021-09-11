<<<<<<< HEAD
import {useState, useEffect} from 'react';
=======
import React, {useState, useEffect} from 'react';
>>>>>>> a36a5aa9be9b6a3215de05d7eb09ac7f822389fd


//location props passed as props.lat and props.lon

const Nasa = (props) => {
<<<<<<< HEAD

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
=======
    const baseURL = 'https://api.nasa.gov/planetary/earth/imagery';
    const API_KEY = '84Y6zLqta7zUh4tMcNwOFnWzFtxRezUHA5dS2fRd' ;
    const [img, setImg] = useState('');
    
    
    useEffect(() => {
        const fetchPic = async () => {
            if(props.lon !== 0 && props.lat !== 0) {
      
      let url = `${baseURL}?lon=${props.lon}&lat=${props.lat}&date=2021-09-10&api_key=${API_KEY}`;
      
      
      await fetch(url)
      .then((res) => {
        console.log(res.url);
>>>>>>> a36a5aa9be9b6a3215de05d7eb09ac7f822389fd
        
        setImg(res.url);
      });
    };

}
    fetchPic();

    },[props.lat,props.lon])
    
    
    return (
        <div>
            <img src={img} alt=""/>
        </div>
    )
}


export default Nasa;