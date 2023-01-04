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

      <div className='container py-4'>
      
      <button onClick={()=>dispatch(fetchPosts())}> Data </button>
     
      
        {/* <div className='App_data'> */}
        <div className='row'>
      {!loading ? (
        posts.map((posts:Data)=> (
<div className='col-md-3 md-3' key={posts.id}>
  <div className='card'>
  <div className='card-body'>

        <h6>#{posts.id}{ posts.title}</h6>
        <p>{posts.body}</p>
        </div>
        </div>
        </div>

        
        )
      )):(
        <h3>Loading...</h3>
      )}
      </div>
      </div>
      {/* </div> */}
      </div>
    
    
  );
}

export default App;