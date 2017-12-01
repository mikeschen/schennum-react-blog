import React from 'react';
import { getTemp } from '../helpers';

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            weathers:[],
        }
    }

    componentDidMount() {
        this.callApi();
    }

    callApi(){
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=85020,us&appid=ddf4617215c851dc1872708540707032')
            .then((result) => {
                return result.json();
            }).then((data) => {
            this.setState({
                weathers: getTemp(data.main.temp)
            })
        })
    }

    render() {
        return (
            <div className="chip chip-style">
                Today's Dog Walking Weather in Phoenix: { this.state.weathers }&deg;F
            </div>
        )
    }
}

export default Weather;