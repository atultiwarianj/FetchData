import React, { useEffect, useState } from 'react'
// interface IShowPerPage{
//     showPerPage:number
// }
// type IOnPaginationChange={
//     start:number,
//     end:number
//   }
//   interface ITotalPage{
//     totalPage:number
//   }
//   type IProps = IShowPerPage | ITotalPage
const Pageination = ({ showPerPage, onPaginationChange, total}) => {
  
  const [counter, setCounter] = useState(1);
  useEffect(() => {
      const endValue = showPerPage * counter;
      const startValue = endValue - showPerPage;
      onPaginationChange(startValue,endValue)
    }, [counter]);
    
const onButtonClick = (type) => {
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
    <div className="d-flex justify-content-center">
    
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"> <button
      className="btn btn-primary"
      onClick={() => onButtonClick("prev")}
    >
      previous
    </button></li>
   
{
  new Array(Math.ceil(total / showPerPage)).fill("").map((el,index)=>(
    <li className={`page-item ${index + 1===counter ? "active" : null}`}>
      <a className="page-link" href="!#" onClick={()=>setCounter(index+1)}>{index+1}</a></li>

  ))
}
    <li className="page-item">  <button
      className="btn btn-primary"
      onClick={() => onButtonClick("next")}
    >
      Next
    </button> </li>
  
  </ul>
</nav>




    {/* 
     
  */}
  </div>
  )
}

export default Pageination;