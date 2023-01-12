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

                <div className='card'>
                  <div className='card-body'>
                    <h4>#{props.id}.{props.title}</h4>
                    <p>{props.body}</p>
                  </div>
                </div>

    </>
  )
}

export default Card;