import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                <a href="/" classname="author">
                Kyle
                </a>
                    <div className="metadata">
                        <span className="data">Today at 6:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                <a href="/" classname="author">
                Matt
                </a>
                    <div className="metadata">
                        <span className="data">Today at 5:50PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                <a href="/" classname="author">
                Tyler
                </a>
                    <div className="metadata">
                        <span className="data">Today at 5:00PM</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));