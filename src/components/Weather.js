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
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=ddf4617215c851dc1872708540707032')
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
            <div>
                <h3>Today's Weather: { this.state.weathers } Degrees</h3>
            </div>
        )
    }
}

export default Weather;