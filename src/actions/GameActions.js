import axios from "axios"
import { BASE_URL } from "../constants/api";
export const getGameList = async dispatch => {
    try{
        dispatch({
            type: "GAMES_LOADING"
        });
        const res = await axios.get(BASE_URL)
        dispatch({
            type: "GAMES_LOADING_SUCCESS",
            payload: res.data
        });
    }
    catch (e) {
  
        dispatch({
            type: "GAMES_FAILED_LOADING"
        });
    }
};
export const getGameDetails = (id) => async dispatch => {
        try{
        dispatch({
            type: "GAMES_DETAILS_LOADING"
        });
        const res = await axios.get(BASE_URL + "/" + id)
    

        dispatch({
            type: "GAMES_DETAILS_SUCCESS",
            payload: res.data
        });
    }
    catch (e) {
        dispatch({
            type: "GAMES_DETAILS_FAILED"
        });
    }
};
export const getFilteredList = (searchTerm,list ) => dispatch => {
    const searchValue = searchTerm.toLowerCase();
    const filterredArray = list.data.results.filter((game) => {
                const lowerCase = game.name.toLowerCase()
                return(
                    lowerCase.indexOf(searchValue) !== -1
                )
            });
    dispatch({
        type: "GAMES_LIST_FILTERED",
        payload: filterredArray,
    });
};

export const getIncCards = (list) => dispatch =>{
  
    dispatch({
        type: 'ADD_CARDS',
        payload: list
        
    });
}

export const getDecCards = (list) => dispatch =>{

    dispatch({
        type: 'REMOVE_CARDS',
        payload: list
    });
}

  