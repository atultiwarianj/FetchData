import React from "react";
import "./Card.css"

interface IProps {
  userId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}



const Card = (props: IProps) => {
  return (
    <>
      <div className="card ">
        <div className="card-body ">
          <div className="header">
          <h6>
            #{props.id}.{props.title}
          </h6>
          </div>
          <img src= {props.thumbnailUrl}  alt="image" />
        </div>
      </div>
    </>
  );
};

export default Card;
