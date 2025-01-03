import InfoBox from './infoBox.jsx';
import './App.css'
import SearchBox from './searchBox.jsx';
import { useState } from 'react';
function App() {
  let [weaInfo, setWeaInfo] = useState({
        city:"Delhi",
        feelsLike: 16.17,
        temp: 16.05,
        tempMax:94,
        tempMin: 16.05,
        weather: "mist"
  });
  let updateInfo = (newInfo) => {
    setWeaInfo(newInfo);
  }
  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weaInfo}/>
    </>
  )
}

export default App
