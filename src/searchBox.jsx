import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchBox.css";
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    const cityUrl = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "1031e82180981b48e6b9fba105594774";



    let getWeatherInfo = async (city) => {
        try {
            let response = await fetch(`${cityUrl}?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) throw new Error("City not found");
            let jsonResponse = await response.json();
            return {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
        } catch (error) {
            console.error("Error fetching weather data:", error.message);
            return null; 
        }
    };
    

    let [city,setCity] = useState("");
    let handleEvent = (e)=>{
        setCity(e.target.value)
    }
    let submitHandler= async (e)=>{
        e.preventDefault();
        console.log(city);
        
        setCity("");
        let newInfo = await getWeatherInfo(city);
        updateInfo(newInfo);
    }

    

    return (
        <div>
            <h2 id='head'>Search for the City!!</h2>
            <form onSubmit={submitHandler}>
                <TextField onChange={handleEvent} required value={city} name="city" id="city" label="City Name" variant="outlined" />
                &nbsp;
                <Button type='submit' variant="contained">Search</Button>
            </form>
            
        </div>
    )
}