import './App.css';
import {observer} from "mobx-react-lite";
import geo from "./Store/geo";
import weather from "./Store/weather"
import {useState} from "react";
import Weather from './components/weather/Weather';
import GeoPositions from "./components/geoPositions/GeoPositions";

const App = observer(() => {

    return (
        <>
        <h2>Weather</h2>
        <div className="App">
            <div className="wrapper">
                <GeoPositions/>
            </div>
            <div className='wrapperWeather'>
                <Weather/>
            </div>
        </div>
        </>
    );
})

export default App;
