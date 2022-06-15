import React, { Component, useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from '../components/ErrorBoundary';

function App () {
    // constructor(){
    //     super()
    //     this.state = {
    //         robots: [],
    //         searchfield:''
    //     }
    // }

    // Declare states
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    
    const onsearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then( response => response.json() )
    //         .then( users => this.setState({robots: users }));
    // }
    
    // const { robots, searchfield } = this.state; --> already have access to the state, no longer need to access it through this.state
    const filteredRobots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
        <h1 className="tc">Loading</h1> :
        (
            <div>
                <h1>Robo Friends</h1>
                <SearchBox searchChange={onsearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
}

export default App;