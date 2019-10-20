import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: '',
        });
    }
    render () {
        return (
            <form className="input-group" onSubmit={this.onFormSubmit}>
                <input 
                    placeholder="Get a five day forecast in your favourite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}
export default connect(null, { fetchWeather })(SearchBar);