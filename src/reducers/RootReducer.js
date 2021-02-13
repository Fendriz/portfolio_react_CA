import {combineReducers} from "redux";
import GameListReducer from "./GameListReducer";
import GameDetailsReducer from "./GameDetailsReducer";
import LikeCardsReducer from "./LikeCardsReducer";


const RootReducer = combineReducers({
    GameList: GameListReducer,
    GameDetails: GameDetailsReducer,
    LikeCards: LikeCardsReducer
});

export default RootReducer