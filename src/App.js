import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from './robots';

class App extends Component {
    // Add State
    constructor(){
        super()
        this.state = {
            // state properties
            robots: robots,
            searchfield:''
        }
    }
    render(){
        return (
            <div>
                <h1>Robo Friends</h1>
                <SearchBox />
                <CardList robots={this.state.robots} />
            </div>
        );
    }
}

export default App;