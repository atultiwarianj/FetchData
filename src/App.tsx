import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchPosts } from "./Store/action_creators";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import Pageination from "./component/Pageination";
import Card from "./component/Card";
import { actionCreators, State } from "./Store";

// interface IProps {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
// interface IOnPaginationChange{
//   start:number,
//   end:number
// }
const App = () => {
  const dispatch= useDispatch();
  const {fetchPostStart, fetchPostSuccess, fetchPostFail} = bindActionCreators(actionCreators, dispatch)

  const { posts, loading } = useSelector((state:State) => ({ ...state.data }));
  const total = posts.length;
  console.log("totalPage",total)
  const [showPerPage, setShowPerPage] = useState(6);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
 

  // Pagination
const onPaginationChange=(start:number, end:number)=>{

    setPagination({start:start,end:end})
  
}




  
  useEffect(() => {
    dispatch:(fetchPosts());
  }, []);
  
  return (
    <div className="App">
      <div className="container py-4">
        <div className="row">
          {posts.slice(pagination.start, pagination.end).map((posts:any) => {
              return (
                <div className="col-md-3 md-3" key={posts.id}>
                  <Card
                    userId={posts.userId}
                    id={posts.id}
                    title={posts.title}
                    body={posts.body}
                  />
                </div>
              );
            })}

          
        </div>
    <Pageination total={total} showPerPage= {showPerPage} onPaginationChange={onPaginationChange}/>

      </div>
    </div>
  );
};

export default App;
