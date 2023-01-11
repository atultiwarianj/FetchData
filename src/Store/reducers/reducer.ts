import { Action } from "../action";
import { ActionType } from "../action-type";



const initialState = {
    posts: [],
    loading: false,
    error: null,
    // pageLimit:number = 4,
    // currentPage:number= 0,
};


const postReducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case ActionType.FETCH_POST_START:
            return {
                ...state,
                loading: true
            };
        case ActionType.FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            };
        case ActionType.FETCH_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
     
export default postReducer;