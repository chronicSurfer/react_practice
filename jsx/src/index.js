//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// create a react component
const App = () => {

    const buttonText = {text: "Click Me!"};

    return (
        <div>
            <label className="label" for="name">Enter your name: </label>
            <input id="name" type="text"/>
            <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText.text}
            </button>
        </div>
    );
};

//Show react component on the screen

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);


