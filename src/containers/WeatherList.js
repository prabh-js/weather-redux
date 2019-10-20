import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends React.Component {
    renderWeather = (cityData) => {
        if (!cityData) {
            return null;
        }
        const name = cityData.name
        const temp = cityData.main.temp;
        const pressure = cityData.main.pressure;
        const humidity = cityData.main.humidity;
        const lon = cityData.coord.lon;
        const lat = cityData.coord.lat;
        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td>{temp}</td>
                <td>{pressure}</td>
                <td>{humidity}</td>
            </tr>
        )
    }
    render () {
        if(!this.props.weather) {
            return null;
        }
        
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        weather: state.weather,
    }
}
export default connect(mapStateToProps)(WeatherList);