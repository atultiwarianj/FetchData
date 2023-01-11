import {ActionType } from "../action-type/index";
import { Action }  from "../action/index";
import axios from "axios";
import { Dispatch } from "redux";

export const fetchPostStart =()=>({
    type: ActionType.FETCH_POST_START,

}); 


// =(amount:number)=>{
//     return (dispatch:Dispatch<Action>)=>{
//         dispatch({
//             type: ActionType.DEPOSIT,
//             payload: amount
//         })
//     }
// }
export const fetchPostSuccess=(posts:Action)=>({
    type: ActionType.FETCH_POST_SUCCESS,
    // payload: number

    payload: posts,
});


// =(amount:number)=>{
//     return (dispatch:Dispatch)=>{
//         dispatch({
//             type: ActionType.WITHDRAW,
//             payload:amount
//         })
//     }
// }
export const fetchPostFail=(error:Action)=>({
    type: ActionType.FETCH_POST_FAIL,

    payload: error,
});


// =()=>{
//     return (dispatch:Dispatch)=>{
//         dispatch({
//             type: ActionType.BANKRUPT
//         })
//     }
// }

// interface IProps{
//         userId: number,
//         id: number,
//         title: string,
//         body: string,
//     length: number

// }
// export type Action = IProps

// const fetchPostStart =()=>({
//     type: ActionType.FETCH_POST_START,

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



// interface DepositAction{
//     type: ActionType.DEPOSIT,
// }
// interface withdrawAction{
//     type: ActionType.WITHDRAW,
//     payload: number
// }
// interface BankruptAction{
//     type:ActionType.BANKRUPT,
   
// }
// export type Action = DepositAction | withdrawAction | BankruptAction 





export const fetchPosts = ()=>{

    return function(dispatch:Dispatch){
    
         dispatch(fetchPostStart()); 
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
         const posts = (response.data.slice(0, 100));
            dispatch(fetchPostSuccess(posts));
            // console.log("post ",posts);
        })
        .catch((error)=>{
            dispatch(fetchPostFail(error.message));
        });
 
    };
}

