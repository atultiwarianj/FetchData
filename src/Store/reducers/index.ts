import { combineReducers } from "redux";
import postReducer from "./reducer";
const rootReducer = combineReducers({
    data: postReducer,


});
export default rootReducer;
export type State = ReturnType<typeof rootReducer>