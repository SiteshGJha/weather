import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import  GoogleMap from '../components/googlemap';

class WeatherList extends Component {

    constructor(props) {
        super(props);

        this.renderWeather = this.renderWeather.bind(this)
    }

    renderWeather() {
        const {city, list} = this.props;

        const name = city.name;
        const temps = list.map(weather => weather.main.temp);
        const pressures = list.map(weather => weather.main.pressure);
        const humidities = list.map(weather => weather.main.humidity);
        const { lon, lat } = city.coord;
    
        return (
          <tr key={name}>
            <td><GoogleMap lon={lon} lat={lat} /></td>
            <td><Chart data={temps} color="orange" units="K" /></td>
            <td><Chart data={pressures} color="green" units="hPa" /></td>
            <td><Chart data={humidities} color="black" units="%" /></td>
          </tr>
        );
    }

    render() {
        return (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (K)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {/* {this.props.data && this.renderWeather(this.props.data)} */}
              {this.renderWeather}
            </tbody>
          </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        city: state.weather.city,
        cnt: state.weather.cnt,
        cod: state.weather.cod,
        list: state.weather.list,
        message: state.weather.message
    }
}

export default connect(mapStateToProps)(WeatherList);