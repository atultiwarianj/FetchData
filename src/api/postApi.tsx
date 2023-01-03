import axios from "axios";

const postApi = axios.create({
    baseURL:"/posts",
});
export default postApi;