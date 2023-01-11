import { combineReducers } from "redux";
import postReducer from "./reducer";
const rootReducer = combineReducers({
    data:postReducer,
    // Pagination:Pagination,

});
export default rootReducer;
export type State = ReturnType<typeof rootReducer>