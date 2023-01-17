import * as types from "../action-type/index"
import axios from "axios";
import { Dispatch } from "redux";

interface IProps {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string

}
export type Action = IProps

const fetchPostStart = () => ({
    type: types.FETCH_POST_START,
});
const fetchPostSuccess = (posts: Action) => ({
    type: types.FETCH_POST_SUCCESS,
    payload: posts,
});
const fetchPostFail = (error: Action) => ({
    type: types.FETCH_POST_FAIL,
    payload: error,
});

export const fetchPosts = () => {

    return function (dispatch: Dispatch) {

        dispatch(fetchPostStart());
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                const posts = (response.data.slice(0, 100));
                dispatch(fetchPostSuccess(posts));
                // console.log("post ",posts);
            })
            .catch((error) => {
                dispatch(fetchPostFail(error.message));
            });

    };
}

