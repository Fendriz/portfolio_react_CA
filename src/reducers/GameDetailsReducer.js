const DefaultState = {
    loading: false,
    data: [],
    errorMsg:""
};

const GameDetailsReducer = (state = DefaultState, action) => {
    switch (action.type){
        case "GAMES_DETAILS_LOADING":
      
            return{
                ...state,
                loading:true,
                errorMsg:""
            };
        case "GAMES_DETAILS_SUCCESS":
    
            return{
                ...state,
                loading:false,
                data: action.payload,
                errorMsg:""

            };
        case "GAMES_DETAILS_FAILED":
      
            return {
                ...state,
                loading:false,
                errorMsg:"Unable to find corrent game"
            }
        default:
            return state;
        
    }
};

export default GameDetailsReducer;