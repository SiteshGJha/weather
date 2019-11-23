import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchWeather } from '../actions/weatherActionCreator';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        };

    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.dispatch(fetchWeather(this.state.term));
        this.setState({term: ""});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-groupt">
                <input
                    placeholder="Get five day forecast in your city"
                    className="form-control"
                    value={this.state.form}
                    onChange={this.onInputChange.bind(this)}
                    />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(SearchBar);