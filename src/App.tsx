import React from 'react';
import './App.css';
import { fetchPosts } from './state/action';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './state/reducers';
import { Dispatch } from 'redux';

interface Data{
  userId: number,
  id: number,
  title: string,
  body: string
}


const App =()=> {
  const { posts, loading } =useSelector((state:State)=> ({...state.data}));

  const dispatch:Dispatch<any>=useDispatch();

  return (
    <div className="App">
      <h3>Redux</h3>
      <button onClick={()=>dispatch(fetchPosts())}> Fetch Post</button>
      {!loading ? (
        posts.map((posts:Data)=> <h5>{posts.body}</h5>)
      ):(
        <h3>Loading...</h3>
      )}
      
    </div>
  );
}

export default App;