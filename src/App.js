import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from './robots';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield:''
        }
    }
    onsearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredRobots);
    }
    render(){
        return (
            <div>
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <CardList robots={this.state.robots} />
            </div>
        );
    }
}

export default App;