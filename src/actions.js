import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants.js'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch( { type: REQUEST_ROBOTS_PENDING });
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100')
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: data.results}))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
}