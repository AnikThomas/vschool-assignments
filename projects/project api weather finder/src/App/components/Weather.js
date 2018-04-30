import React from 'react';
import { connect } from 'react-redux';
import { getWeather } from '../../Redux/WeatherReducer';
import '../weather-images/clear.png'

class Currently extends React.Component {

    componentDidMount() {
        this.props.getWeather()
    
    }
    render() {
        
        const { icon, summary, temperature, humidity,
        } = this.props.currently
        console.log(this.props.currently);
        let iconImg
        switch (icon) {
            default:
                iconImg = <img src='../../../weather-images/clear.png' alt='clear' />
        }
        console.log(iconImg)
        return (
            <div> Weather Component
                <table border="1">
                    <tr><td>icon</td><td>{iconImg}</td></tr>
                    <tr><td>summary</td><td>{summary}</td></tr>
                    <tr><td>temperature</td><td>{temperature}</td></tr>
                    <tr><td>humidity</td><td>{humidity}</td></tr>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => { return state.Weather }

export default connect(mapStateToProps, { getWeather })(Currently);