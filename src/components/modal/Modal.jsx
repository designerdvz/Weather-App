import s from '../modal/modal.module.css'
import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import {observer} from "mobx-react-lite";
import weatherFiveDays from "../../Store/weatherFiveDays";
import cloudImg from "../../assets/images/cloudy.png";
import rainImg from "../../assets/images/rain.png";
import snowImg from "../../assets/images/snow.png";
import sunImg from "../../assets/images/sun.png";
import WeatherCard from "../weatherCard/WeatherCard";

const ModalDays = observer((props) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 470,
        borderRadius: 3,
        bgcolor: '#a7a7a7',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    }

    const handleClose = () => {
        props.setOpen(false);
    }

    return (
        <Modal open={props.open} onClose={(event) => handleClose(event)}>
            <Box sx={{...style}}>
                <h2 className={s.moduleText}> {weatherFiveDays.weather.name}</h2>
                <h2 className={s.moduleText}> weather forecast for 3 days </h2>
                <div className={s.wrapper}>
                    <div>
                        <WeatherCard dayArray={weatherFiveDays.weather.dayOne} />
                    </div>
                    {/*<div>*/}
                    {/*    <WeatherCard dayArray={weatherFiveDays.weather.dayTwo} />*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <WeatherCard dayArray={weatherFiveDays.weather.dayThree} />*/}
                    {/*</div>*/}
                </div>
            </Box>
        </Modal>
    )
})

export default ModalDays