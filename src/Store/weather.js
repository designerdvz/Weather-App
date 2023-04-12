import {makeAutoObservable} from 'mobx'
import React from "react";

class Weather {
    weather = {
        clouds: '',
        name: '',
        temp: '',
        temp_min: '',
        temp_max: '',
        humidity: '',
        lon: '',
        lat: ''
    }

    constructor() {
        makeAutoObservable(this)
    }

    getWeather(lon, lat) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=39ed0af50e79dbc878b457e92802f5d0`)
            .then(res => res.json())
            .then(result => {
                this.weather.name = result.name
                this.weather.temp = result.main.temp
                this.weather.clouds = result.weather[0].main
                this.weather.temp_min = result.main.temp_min
                this.weather.temp_max = result.main.temp_max
                this.weather.humidity = result.main.humidity
                this.weather.lon = result.coord.lon
                this.weather.lat = result.coord.lat
            })
    }

}

export default new Weather()

