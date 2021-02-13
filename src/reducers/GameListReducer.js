const DefaultState = {
    loading: false,
    data: [],
    filtereddata: [],
    errorMsg:""
};

const GameListReducer = (state = DefaultState, action) => {
    switch (action.type){
        case "GAMES_LOADING":
            return{
                ...state,
                loading:true,
                errorMsg:""
            };
        case "GAMES_LOADING_SUCCESS":
            return{
                ...state,
                loading:false,
                data: action.payload,
                filtereddata: action.payload,
                errorMsg:""

            };
        case "GAMES_FAILED_LOADING":
            return {
                ...state,
                loading:false,
                errorMsg:"Unable to get data"
            }
        case "GAMES_LIST_FILTERED":
            return{
                ...state,
                loading:false,
                filtereddata: {
                    ...state.filtereddata,
                    results :action.payload,
                },
                errorMsg:""
            };
        default:
            return state;
    }
};
export default GameListReducer;

