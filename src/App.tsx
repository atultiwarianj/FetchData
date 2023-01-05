import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchPosts } from './Store/action';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './Store/reducers';
import { Dispatch } from 'redux';
import Pagination from './component/Pagination';
import Card from './component/Card';

interface IProps {
  userId: number,
  id: number,
  title: string,
  body: string
}


const App = () => {
  const [showPerPage, setShowPerPage] = useState(8)
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const { posts, loading } = useSelector((state: State) => ({ ...state.data }));

  const onPaginationChange = (startValue: number, endValue: number) => {
    // console.log(startValue, endValue)
  }


  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <div className="App">
      <div className='container py-4'>
        {/* <button className="btn btn-primary"
          onClick={() => dispatch(fetchPosts())}> Show Data </button> */}
        <div className='row'>
          {
            posts.slice(pagination.start, pagination.end).map((posts: IProps,) => {
              return <>

                <Card userId={posts.userId}
                  id={posts.id}
                  title={posts.title}
                  body={posts.body}
                />
              </>
            }
            )}

          <Pagination showPerPage={showPerPage}
          // onPaginationChange={onPaginationChange }
          />
        </div>
      </div>
      {/* </div> */}
    </div>


  );
}

export default App;