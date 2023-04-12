import {makeAutoObservable} from 'mobx'
import React from "react";

class WeatherFiveDays {
    weather = {
        name: '',
        dayOne: [],
        dayTwo: [],
        dayThree: []
    }

    constructor() {
        makeAutoObservable(this)
    }

    getWeatherFiveDays(lon, lat) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=39ed0af50e79dbc878b457e92802f5d0`)
            .then(res => res.json())
            .then(result => {
                this.weather.name = result.city.name
                const date = new Date()
                let day = date.getDate()
                let month = date.getMonth() + 1
                let year = date.getFullYear()
                let currentDate
                let tomorrow = new Date(date.getTime() + (24 * 60 * 60 * 1000))
                let dayTomorrow = tomorrow.getDate()
                let monthTomorrow = tomorrow.getMonth() + 1
                let yearTomorrow = tomorrow.getFullYear()
                let tomorrowDay
                let afterTomorrow = new Date(date.getTime() + 2 * (24 * 60 * 60 * 1000))
                let dayAfterTomorrow = afterTomorrow.getDate()
                let monthAfterTomorrow = afterTomorrow.getMonth() + 1
                let yearAfterTomorrow = afterTomorrow.getFullYear()
                let AfterTomorrowDay
                if ((month < 10) && (day < 10)) {
                    currentDate = `${year}-0${month}-0${day}`}
                 else if (day < 10) {
                    currentDate = `${year}-${month}-0${day}`
                } else if (month < 10) {
                    currentDate = `${year}-0${month}-${day}`
                } else currentDate = `${year}-${month}-${day}`
                if ((monthTomorrow < 10) && (dayTomorrow < 10)) {
                    tomorrowDay = `${yearTomorrow}-0${monthTomorrow}-0${dayTomorrow}`}
                 else if (dayTomorrow < 10) {
                    tomorrowDay = `${yearTomorrow}-${monthTomorrow}-0${dayTomorrow}`
                } else if (monthTomorrow < 10) {
                    tomorrowDay = `${yearTomorrow}-0${monthTomorrow}-${dayTomorrow}`
                } else tomorrowDay = `${yearTomorrow}-${monthTomorrow}-${dayTomorrow}`
                if ((monthAfterTomorrow < 10) && (dayAfterTomorrow < 10)) {
                    AfterTomorrowDay = `${yearAfterTomorrow}-0${monthAfterTomorrow}-0${dayAfterTomorrow}`}
                 else if (dayTomorrow < 10) {
                    AfterTomorrowDay = `${yearAfterTomorrow}-${monthAfterTomorrow}-0${dayAfterTomorrow}`
                } else if (monthTomorrow < 10) {
                    AfterTomorrowDay = `${yearAfterTomorrow}-0${monthAfterTomorrow}-${dayAfterTomorrow}`
                } else AfterTomorrowDay = `${yearAfterTomorrow}-${monthAfterTomorrow}-${dayAfterTomorrow}`
                result.list.map((obj) => {
                    if (obj.dt_txt.includes(currentDate)) this.weather.dayOne.push(obj)
                    if (obj.dt_txt.includes(tomorrowDay)) this.weather.dayTwo.push(obj)
                    if (obj.dt_txt.includes(AfterTomorrowDay)) this.weather.dayThree.push(obj)
                }

                )
            })
    }

}

export default new WeatherFiveDays()

