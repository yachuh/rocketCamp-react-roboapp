import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    
    onsearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            .then( users => this.setState({robots: users }));
    }
    
    render(){
        const filteredRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div>
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;