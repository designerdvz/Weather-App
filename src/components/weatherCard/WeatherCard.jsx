import s from '../modal/modal.module.css'
import React, {useEffect} from 'react'
import {observer} from "mobx-react-lite";
import weatherFiveDays from "../../Store/weatherFiveDays";
import cloudImg from "../../assets/images/cloudy.png";
import rainImg from "../../assets/images/rain.png";
import snowImg from "../../assets/images/snow.png";
import sunImg from "../../assets/images/sun.png";

const WeatherCard = ({dayArray}) => {
    let imageSrc = 'snowImg'
    useEffect(() => {console.log(dayArray)}, [])
    // if (dayArray[dayArray.length / 2]?.weather[0].main === 'Clouds') {
    //     imageSrc = 'cloudImg'
    // } else if (dayArray[dayArray.length / 2].weather[0].main === 'Rain') {
    //     imageSrc = 'rainImg'
    // }
    // if (dayArray[dayArray.length / 2].weather[0].main === 'Snow') {
    //     imageSrc = 'snowImg'
    // } else imageSrc = 'sunImg'

return (
    <div
        className={s.firstDay}> {dayArray[dayArray.length / 2]?.dt_txt.slice(0, 10)}
        <div><img className={s.cloudsImg}
                  src={imageSrc}/>
        </div>
        <div
            className={s.elem}>{dayArray[dayArray.length / 2]?.weather[0].main}  </div>
        <div className={s.elem}> Min
            temperature {Math.ceil(dayArray[dayArray.length / 2]?.main.temp_min - 273)} C°
        </div>
        <div className={s.elem}> Max
            temperature {Math.ceil(dayArray[dayArray.length / 2]?.main.temp_max - 273)} C°
        </div>
        <div className={s.elem}> 💦
            Humidity {dayArray[dayArray.length / 2]?.main.humidity} %
        </div>
    </div>
)
}

export default WeatherCard