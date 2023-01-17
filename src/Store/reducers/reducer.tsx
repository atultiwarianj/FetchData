import * as types from "../action-type/index";
import { Action } from "../action";
const initialState = {
  posts: [],
  loading: false,
  error: null,
  // pageLimit:number = 4,
  // currentPage:number= 0,
};
// interface fetchPostStart{
//     type: ActionType.FETCH_POST_START,
    
// }
// interface fetchPostSuccess{
//     type: ActionType.FETCH_POST_SUCCESS,
//     payload: number
// }
// interface fetchPostFail{
//     type: ActionType.FETCH_POST_FAIL,
//     payload: string,
   
// }
// export type ActionT = fetchPostStart | fetchPostSuccess | fetchPostFail 

const postReducer = (state = initialState, action:any ) => {
  switch (action.type) {
    case types.FETCH_POST_START:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case types.FETCH_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
