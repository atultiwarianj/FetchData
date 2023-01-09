// import React, { useEffect, useState } from 'react'

// interface showPerPage  {
//     showPerPage: number,
// }
// interface onPaginationChange extends showPerPage {
//     startValue: number,
//     endValue: number,
// }
// type AllType = showPerPage | onPaginationChange

// const Pagination: React.FC<showPerPage> = ({ showPerPage }) => {
//     const [counter, setCounter] = useState(1);
//     console.log("counter", counter);


//     useEffect(() => {
//         const endValue = showPerPage * counter;
//         const startValue = endValue - showPerPage;
//         // onPaginationChange(startValue,endValue)
//         // console.log("start",startValue)
//         // console.log("endValue",endValue)

//     }, [counter])



//     return (<>
//         <div className='d-flex justify-content-between'>
//             <button className="btn btn-primary" onClick={() => setCounter(counter - 1)}>previous</button>
//             <h5>{counter}</h5>
//             <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>Next</button>
//         </div>
//     </>
//     )
// }

export {};