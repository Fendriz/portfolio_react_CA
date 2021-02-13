const DefaultState = [];

const LikeCardsReducer = (state=DefaultState,action) =>{
    switch(action.type) {
        case 'ADD_CARDS':
            return [...state, action.payload]
        
        case 'REMOVE_CARDS':
            return [...state.filter(x => {return x.id != action.payload.id})]
        default:
            return state;
    }
};
export default LikeCardsReducer;