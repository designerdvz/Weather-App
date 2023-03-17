import s from './weather.module.css'
import {observer} from 'mobx-react-lite'
import weather from '../../Store/weather'
import cloudImg from '../../../src/assets/images/cloudy.png'
import sunImg from '../../../src/assets/images/sun.png'
import rainImg from '../../assets/images/rain.png'

const Weather = observer(() => {
    return (
        <div className={s.list}>
            <div><img className={s.cloudsImg}
                      src={(weather.weather.clouds === 'Clouds') ? cloudImg : (weather.weather.clouds === 'Rain') ? rainImg : sunImg}/>
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
    )
})

export default Weather