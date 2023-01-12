import * as types from "../action-type/index"
import axios from "axios";
import { Dispatch } from "redux";

interface IProps{
        userId: number,
        id: number,
        title: string,
        body: string,
    length: number

}
export type Action = IProps

const fetchPostStart =()=>({
    type: types.FETCH_POST_START,
});
const fetchPostSuccess=(posts:Action)=>({
    type: types.FETCH_POST_SUCCESS,
    payload: posts,
});
const fetchPostFail =(error:Action)=>({
    type: types.FETCH_POST_FAIL,
    payload: error,
});

//For Pagaiation 

// const newPage = (posts: Action) => ({
//     type: types.NEW_PAGE,
//     payload: posts,
// })


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

