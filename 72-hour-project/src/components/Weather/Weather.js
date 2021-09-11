import React, {useState, useEffect} from 'react';
import '../../App.css';


const Weather = (props) => {
    
    const key = '794641ec48ab3e42cfa844e52f72b099';
    
    const lat = props.lat;
    const lon = props.lon;

    
    const [data,setData] = useState([]);
    const[c, setC] = useState('C°')
    const [f, setF] = useState('F°');

    
    
    

    
   
    
    
    
    const dateMaker = (d) => {
        const months = [ "January", "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December" ];
        const days = [ 'Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' ];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        
        return `${day}, ${month} ${date}, ${year}`
        
      }
    
    
    
        
        
       
      useEffect(() => {  
        
        const fetchData = async () => {
            
          
            if(lon !== 0 && lat !== 0) {
               
            await fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&cnt=1&units=imperial&appid=${key}`)
            .then(res => res.json())
            .then(result => {
                
                setData(result);
                
                console.log(result);
                
                
                
            });
            
        }
     }

    
     
        fetchData();
    
    
    },[lat,lon])
    
    const buttonHandler = () => {
       
        
        setC('F°')
        setF('C°')
        
    }
    
    
      return(
        
        <div className="app">
         <main>
          <div className="location-box">
           <div className="location">  {data.name}, Indiana </div>
           <div className="date">{dateMaker(new Date())}</div>
          </div>
          <div className="weather-box">
          <div className="temperature">
          {(typeof data.main != 'undefined')?
            (c === 'F°') ?
            (Math.round(data.main.temp - 32) * 5/9)
            : (Math.round(data.main.temp))
           : (
              <div>
              </div>
           )}
           
          {f}

            
          
          </div>
          <div className="weather">  
          
          </div>
            <button className="btn" onClick={buttonHandler}>{c}</button>
          </div>
          </main>
      </div>
    
    )
}

export default Weather;