import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from './robots';

class App extends Component {
    render(){
        return (
            <div>
                <h1>Robo Friends</h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
        );
    }
}

export default App;