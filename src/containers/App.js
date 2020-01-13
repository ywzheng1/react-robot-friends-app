import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://api.pokemontcg.io/v1/cards')
        .then(response => response.json())
        // .then(response => console.log(response.cards))
        // .then(users => console.log(users.cards))
        .then(users => this.setState( { robots: users.cards}))
    }

    onSearchChange = (event) => {
        this.setState( { searchfield: event.target.value })
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        if( this.state.robots.length === 0 ){
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>
                <h1>Pokédex</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={ filteredRobots } />
                </Scroll>
            </div>   
            )
        }
    }
}


export default App;