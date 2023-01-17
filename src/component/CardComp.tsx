import "./CardCss.css";
import Card from "react-bootstrap/Card";

interface IProps {
  userId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const CardComp = (props: IProps) => {
  return (
    <>
    
      <div className="card ">
       <img className="image" src={props.thumbnailUrl} alt="image" />
      <Card  className="card-body " >
       <Card.Title className="header">#{props.id}.{props.title}</Card.Title>
       </Card>
  
      
      </div>
    </>
  );
};

export default CardComp;
