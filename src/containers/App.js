import React, { Component, useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from '../components/ErrorBoundary';

function App () {
    // Declare states
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);
    
    const onsearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    useEffect( ()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {setRobots(users)})
        console.log(count);
    },[count]) // only run if "count" changes
    
    const filteredRobots = robots.filter( robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

    return !robots.length ?
        <h1 className="tc">Loading</h1> :
        (
            <div>
                <h1>Robo Friends</h1>
                <button onClick={()=>{setCount(count+1)}}>Click me</button>
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