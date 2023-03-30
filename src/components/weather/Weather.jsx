import s from './weather.module.css'
import {observer} from 'mobx-react-lite'
import weather from '../../Store/weather'
import cloudImg from '../../../src/assets/images/cloudy.png'
import sunImg from '../../../src/assets/images/sun.png'
import rainImg from '../../assets/images/rain.png'
import snowImg from '../../assets/images/snow.png'
import {useState} from "react";
import ModalDays from "../modal/Modal";
import weatherFiveDays from "../../Store/weatherFiveDays";

const Weather = observer(() => {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <ModalDays open={open} setOpen={setOpen}/>
        <div className={s.list} onClick={() => {
            weatherFiveDays.getWeatherFiveDays(weather.weather.lon, weather.weather.lat)
            setOpen(true)}}>
            <div className={s.elemTitle}>
                {weather.weather.name}
            </div>
            <div><img className={s.cloudsImg}
                      src={(weather.weather.clouds === 'Clouds') ? cloudImg : (weather.weather.clouds === 'Rain') ? rainImg : (weather.weather.clouds === 'Snow') ? snowImg : sunImg}/>
            </div>
            <div className={s.elem}>{weather.weather.clouds}  </div>
            <div
                className={s.elem}> Temperature: {weather.weather.temp !== '' && Math.ceil(weather.weather.temp - 273)} C°
            </div>
            <div className={s.elem}> Min
                temperature {weather.weather.temp_min !== '' && Math.ceil(weather.weather.temp_min - 273)} C°
            </div>
            <div className={s.elem}> Max
                temperature {weather.weather.temp_max !== '' && Math.ceil(weather.weather.temp_max - 273)} C°
            </div>
            <div className={s.elem}> 💦 Humidity {weather.weather.humidity !== '' && weather.weather.humidity}%</div>
        </div>
        </div>
    )
})

export default Weather