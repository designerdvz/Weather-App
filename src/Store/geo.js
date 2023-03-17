import { makeAutoObservable } from "mobx"
import React from "react";

class Geo {
    positions = []

    countryCity = []

    constructor() {
        makeAutoObservable(this)
    }

    addPosition(position) {
        this.positions.push(position)
    }

    fetchPosition(position) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=39ed0af50e79dbc878b457e92802f5d0`)
            .then(res => res.json())
            .then(result => {
                this.countryCity.push(result)
            })
    }

}

export default new Geo()