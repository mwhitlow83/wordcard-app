import react, { useState } from "react";
import './WordCard.css';

export default function WordCard({front, back}){
    const [isFront, setFront] = useState(true);
    
    const cardContent = isFront ?  <p className="card-front">Question:{front}</p> : 
    <p className="card-back">Answer:{back}</p>;
    
    const handleClick = () => {
    setFront(!isFront);
    };
    return (
        <div className="word-card" onClick={handleClick}>
            {cardContent}
        </div>
    )
    }
