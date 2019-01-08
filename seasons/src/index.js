import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

    //not required by react
    constructor(props) {
        //if used must call super and pass in props
        super(props);
        
        //this is the only time you make direct assignment to state
        this.state = {lat: null, errorMessage: ''};

    }

    //form below is equivalent to using a constructor
    // state = {lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    // componentDidUpdate() {
    //     console.log("My component was just updated!")
    // }

    //React says we have to define render
    render() {
                if(this.state.errorMessage && !this.state.lat){
                    return <div>Error: {this.state.errorMessage}</div>
                } else if (this.state.lat && !this.state.errorMessage) {
                    return <div><SeasonDisplay lat={this.state.lat}/></div>
                } else {
                    return <div>Loading!</div>
                }
            }
        }

ReactDOM.render(<App />, document.querySelector('#root'));