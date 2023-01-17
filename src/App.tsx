import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchPosts } from "./Store/action";
import { useDispatch, useSelector } from "react-redux";
import { State } from "./Store/reducers";
import { Dispatch } from "redux";
import Card from "./component/Card";

interface IProps {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const App = () => {
  const { posts, loading } = useSelector((state: State) => state.data);
  const total = posts.length;
  console.log("totalPage", total);
  const [showPerPage, setShowPerPage] = useState(8);
  const [counter, setCounter] = useState(1);

  // console.log("num/berOfPages",numberOfPages)
  const [pagination, setPagination] = useState({
    start: 0,
    end: 8,
  });
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  // Pagination
  const onPaginationChange = (start: number, end: number) => {
    setPagination({ start: start, end: end });
  };

  useEffect(() => {
    const endValue = showPerPage * counter;
    const startValue = endValue - showPerPage;
    onPaginationChange(startValue, endValue);
  }, [counter]);

  const onButtonClick = (type: string) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="App">
      <div className="container ">
        <div className="row">
          {posts
            .slice(pagination.start, pagination.end)
            .map((posts: IProps) => {
              return (
                <div className=" card_size" key={posts.id}>
                  <Card
                    userId={posts.albumId}
                    id={posts.id}
                    title={posts.title}
                    url={posts.url}
                    thumbnailUrl={posts.thumbnailUrl}
                  />
                </div>
              );
            })}

          <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                
                  <button
                    className="btn"
                    onClick={() => onButtonClick("prev")}
                  >
                    prev
                  </button>
                </li>

                {new Array(Math.ceil(total / showPerPage))
                  .fill("")
                  .map((el, index) => (
                    <li
                      className={`page-item ${
                        index + 1 === counter ? "active" : null
                      }`}
                    >
                      <a
                        className="page-link"
                        href="!#"
                        onClick={() => setCounter(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                <li className="page-item">
                  <button
                    className="btn btn-primary"
                    onClick={() => onButtonClick("next")}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
