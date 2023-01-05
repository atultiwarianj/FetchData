import React from 'react'

interface IProps {
    userId: number,
    id: number,
    title: string,
    body: string
  }

const Card = (props:IProps) => {
  return (
    <>
     <div className='col-md-3 md-3' key={props.userId}>
                <div className='card'>
                  <div className='card-body'>
                    <h6>#{props.id}.{props.title}</h6>
                    <p>{props.body}</p>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Card;