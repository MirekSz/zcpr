import React from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

export const About = () => {
    return (
        <div className="container">
            <h1>About!!</h1>
        </div>
    );
}

export const UserDetails = (props) => {
    if (!props.match.params.id) {
        return null;
    }
    return (
        <div className="container">
            <h1>details!! {props.match.params.id}</h1>
        </div>
    );
}

export const Users = (props) => {
    console.log(props)
    return (
        <Router>
            <div className="container">
                <ul>
                    <li><Link to={`${props.match.url}/1`}>1</Link></li>
                    <li><Link to={`${props.match.url}/2`}>2</Link></li>
                    <li><Link to={`${props.match.url}/3`}>3</Link></li>
                </ul>
                <Route path={`${props.match.url}/:id`} component={UserDetails}/>
            </div>
        </Router>
    )
};

