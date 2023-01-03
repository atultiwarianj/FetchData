import React from 'react';
import './App.css';
import { fetchPosts } from './state/action';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './state/reducers';
import { Dispatch } from 'redux';


function App() {
  const { posts, loading } =useSelector((state:State)=> ({...state.data}));

  const dispatch:Dispatch<any>=useDispatch();

  return (
    <div className="App">
      <h3>redux thunk</h3>
      <button onClick={()=>dispatch(fetchPosts())}> Fetch Post</button>
      {!loading ? (
        posts.map((post:any)=> <h5>{post.body}</h5>)
      ):(
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default App;