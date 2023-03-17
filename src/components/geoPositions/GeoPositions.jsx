import {observer} from 'mobx-react-lite'
import geo from '../../Store/geo'
import weather from '../../Store/weather'
import {useState} from 'react'
import s from './geoPositions.module.css'

const GeoPostions = observer(() => {
    const [inputLat, setInputLat] = useState()
    const [inputLong, setInputLong] = useState()
    const [valid, setValid] = useState(true)

    let geoPosition = {
        latitude: inputLat,
        longitude: inputLong
    };

    return (
        <div className={s.wrapper}>
            <h4>Enter coordinates:</h4>
            <div className={s.addGeo}>
                <input type="number" className={valid ? s.input : s.invalidInput} name='inputLan'
                       onChange={(event) => {
                           setValid(true)
                           setInputLat(event.target.value)
                       }} min={-90} max={90}></input>
                <input type="number" className={valid ? s.input : s.invalidInput} name='inputLong'
                       onChange={(event) => {
                           setValid(true)
                           setInputLong(event.target.value)
                       }} min={-180} max={180}></input>
                <button className={s.addGeoButton} onClick={() => {
                    if (geoPosition.latitude && geoPosition.longitude) {
                        geo.addPosition(geoPosition)
                        setValid(true)
                        geo.fetchPosition(geoPosition)
                    } else setValid(false)
                }}>Add
                </button>
            </div>
            <div className={s.geoList}>
                {geo.countryCity.map(pos => {
                    return <div className={s.list}
                                onClick={() => weather.getWeather(pos.coord.lon, pos.coord.lat)}> {pos.sys?.country} : {pos.name} </div>
                })}
            </div>
        </div>
    )
})

export default GeoPostions
