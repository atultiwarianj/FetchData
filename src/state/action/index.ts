import * as types from "../action-type/index"
import axios from "axios";
import { Dispatch } from "redux";

interface Data{
        userId: number,
        id: number,
        title: string,
        body: string
}


const fetchPostStart =()=>({
    type: types.FETCH_POST_START,
});
const fetchPostSuccess=(posts:Data)=>({
    type: types.FETCH_POST_SUCCESS,
    payload: posts,
});
const fetchPostFail =(error:Data)=>({
    type: types.FETCH_POST_FAIL,
    payload: error,
});

export const fetchPosts = ()=>{

    return function(dispatch:Dispatch){
    
         dispatch(fetchPostStart()); 
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            const posts = (response.data.slice(0, 30));
            dispatch(fetchPostSuccess(posts));
            console.log(posts.slice(0, 5));
        })
        .catch((error)=>{
            dispatch(fetchPostFail(error.message));
        });
 
    };
}



