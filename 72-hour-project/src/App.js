import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';


function App() {
  
    
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      });
    } else {
      console.error('Geo-location has been disabled');
    }
  };
  
  useEffect(() => {
    getLocation();
  }, [lat,lon]);
  
  
  return (
    <div className="App">
      
      <Navbar lat={lat} lon={lon} />
      
   
    </div>
  );
}

export default App;
