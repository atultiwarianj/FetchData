import * as types from "../action-type/index";



const initialState = {
    posts: [],
    loading: false,
    error: null,
    // pageLimit:number = 4,
    // currentPage:number= 0,
};


const postReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case types.FETCH_POST_START:
            return {
                ...state,
                loading: true
            };
        case types.FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            };
        case types.FETCH_POST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
// export const Pagination = (state=initialState, action)=>{
//     switch( action.type){
//         case types.NEW_PAGE:
//             return{
//                 ...state,
//                 posts:action.payload.length,
            
//             }

//         }
//     }        
export default postReducer;