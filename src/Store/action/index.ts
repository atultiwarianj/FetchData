import {ActionType } from "../action-type/index";

// interface IProps{
//         userId: number,
//         id: number,
//         title: string,
//         body: string,
//     length: number

// }
// export type Action = IProps

// const fetchPostStart =()=>({

// });
// const fetchPostSuccess=(posts:Action)=>({
//     type: ActionType.FETCH_POST_SUCCESS,
//     // payload: number

//     payload: posts,
// });
// const fetchPostFail =(error:Action)=>({
//     type: ActionType.FETCH_POST_FAIL,

//     payload: error,
// });



interface fetchPostStart{
    type: ActionType.FETCH_POST_START,
    
}
interface fetchPostSuccess{
    type: ActionType.FETCH_POST_SUCCESS,
    payload: number
}
interface fetchPostFail{
    type: ActionType.FETCH_POST_FAIL,
    payload: string,
   
}
export type Action = fetchPostStart | fetchPostSuccess | fetchPostFail 





// export const fetchPosts = ()=>{

//     return function(dispatch:Dispatch){
    
//          dispatch(fetchPostStart()); 
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then((response)=>{
//          const posts = (response.data.slice(0, 100));
//             dispatch(fetchPostSuccess(posts));
//             // console.log("post ",posts);
//         })
//         .catch((error)=>{
//             dispatch(fetchPostFail(error.message));
//         });
 
//     };
// }

