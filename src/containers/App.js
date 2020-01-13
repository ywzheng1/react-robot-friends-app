import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {setSearchField, requestRobots} from '../actions'

const mapStateToPros = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots()
    }


    render(){
        const { searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })

        return(
            <div className='tc'>
                <h1>Pokédex</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                { isPending ? <h1>Loading</h1> :
                    <CardList robots={filteredRobots} />
                }
                </Scroll>
            </div>   
        )
    }
}


export default connect(mapStateToPros, mapDispatchToProps)(App);