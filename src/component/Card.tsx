import React from 'react'


// interface IProps {
//     userId: number,
//     id: number,
//     title: string,
//     body: string
//   }

const Card = (props) => {
  return (
    <>
                <div className='card'>
                  <div className='card-body'>
                    <h6>#{props.id}.{props.title}</h6>
                    <p>{props.body}</p>
                  </div>
                </div>

    </>
  )
}

export default Card;