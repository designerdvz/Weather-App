import './App.css';
import {observer} from "mobx-react-lite";
import geo from "./Store/geo";
import weather from "./Store/weather"
import {useState} from "react";
import cloudImg from '../src/assets/images/cloudy.png'
import sunImg from '../src/assets/images/sun.png'

const App = observer(() => {
    const [inputLat, setInputLat] = useState();
    const [inputLong, setInputLong] = useState();
    const [valid, setValid] = useState(true);

    let geoPosition = {
        latitude: inputLat,
        longitude: inputLong
    };

    return (
        <div className="App">
            <h2>Weather</h2>
            <input type="number" className={valid ? 'input' : 'invalidInput'} name='inputLan'
                   onChange={(event) => {
                       setValid(true)
                       setInputLat(event.target.value)
                   }} min={-90} max={90}></input>
            <input type="number" className={valid ? 'input' : 'invalidInput'} name='inputLong'
                   onChange={(event) => {
                       setValid(true)
                       setInputLong(event.target.value)
                   }} min={-180} max={180}></input>
            <button onClick={() => {
                if (geoPosition.latitude && geoPosition.longitude) {
                    geo.addPosition(geoPosition)
                    setValid(true)
                    geo.fetchPosition(geoPosition)
                } else setValid(false)
            }}>Add geo
            </button>
            <div className="geoList">
            {geo.countryCity.map(pos => {
                return <div
                    onClick={() => weather.getWeather(pos.coord.lon, pos.coord.lat)}> {pos.sys?.country} : {pos.name} </div>
            })}
            </div>
            <div className="wrapperWeather">
                <div><img className='cloudsImg' src={(weather.weather.clouds === 'Clouds') ? cloudImg : sunImg}/></div>
                <div className="clouds">{weather.weather.clouds}  </div>
                <div className="temp"> Temperature: {weather.weather.temp !== '' && Math.ceil(weather.weather.temp - 273)} C°</div>
                <div className="maxTemp"> Min temperature {weather.weather.temp_min !== '' && Math.ceil(weather.weather.temp_min - 273)} C°</div>
                <div className="minTemp"> Max temperature {weather.weather.temp_max !== '' && Math.ceil(weather.weather.temp_max - 273)} C°</div>
                <div className="humidity"> 💦 Humidity  {weather.weather.humidity !== '' && weather.weather.humidity}%</div>
            </div>
        </div>
    );
})

export default App;
