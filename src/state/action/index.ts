import * as types from "../action-type/index"
import axios from "axios";
import { Dispatch } from "redux";
const fetchPostStart =()=>({
    type: types.FETCH_POST_START,
});
const fetchPostSuccess=(posts:string)=>({
    type: types.FETCH_POST_SUCCESS,
    payload: posts,
});
const fetchPostFail =(error:string)=>({
    type: types.FETCH_POST_FAIL,
    payload: error,
});

export const fetchPosts = ()=>{
    return function(dispatch:Dispatch){
        dispatch(fetchPostStart());
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            const posts = response.data;
            dispatch(fetchPostSuccess(posts));
        })
        .catch((error)=>{
            dispatch(fetchPostFail(error.message));
        });

    };
}
