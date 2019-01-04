import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

    //not required by react
    constructor(props) {
        //if used must call super and pass in props
        super(props);
        
        //this is the only time you make direct assignment to state
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //update state
                this.setState({lat: position.coords.latitude})
            },
            (err) => console.log(err)
        );
    }

    //React says we have to define render
    render() {
        
        return <div>Latitude: {this.state.lat}</div>;
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);