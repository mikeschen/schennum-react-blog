import React from 'react';

class Weather extends React.Component {

    componentDidMount() {
        this.callApi();
    }

    callApi(){
        // Github fetch library : https://github.com/github/fetch
        // Call the API page
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=ddf4617215c851dc1872708540707032')
            .then((result) => {
                return result.json();
            }).then((jsonResult) => {
            console.log(jsonResult);
        })
    }

    render() {
        return <div>
            <h3>Today's Weather </h3>
        </div>;
    }
}

export default Weather;




// http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=ddf4617215c851dc1872708540707032