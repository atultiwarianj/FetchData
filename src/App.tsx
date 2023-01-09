import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchPosts } from "./Store/action";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./Store/reducers";
import { Dispatch } from "redux";
import Card from "./component/Card";

interface IProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const { posts, loading } = useSelector((state: State) => ({ ...state.data }));
  const totalPage = posts.length;

  const [showPerPage, setShowPerPage] = useState(8);
  const [counter, setCounter] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(Math.ceil(totalPage / showPerPage));
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  useEffect(() => {
    const endValue = showPerPage * counter;
    const startValue = endValue - showPerPage;
    setPagination({ start: startValue, end: endValue });
  }, [counter]);

  const onButtonClick = (type: any) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
        // console.log(counter)
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfPages === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="App">
      <div className="container py-4">
        <div className="row">
          {posts
            .slice(pagination.start, pagination.end)
            .map((posts: IProps) => {
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

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => onButtonClick("prev")}
            >
              previous
            </button>
            {/* {new Array(numberOfPages).fill("").map((el, ind) => {
              return <>
              <li>test</li>
              <a>ind {ind}</a>;
            </>
            })}
     */}
            <button
              className="btn btn-primary"
              onClick={() => onButtonClick("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
