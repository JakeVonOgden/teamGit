import React, {useState, useEffect} from 'react';


//location props passed as props.lat and props.lon

const Nasa = (props) => {
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