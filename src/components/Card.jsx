import React, { useState } from "react";
import "../App.css"



const Card = (props) => {
    const [cardFlipped, setCardFlipped] = useState(false); // Initial State in beginning
    const flipCard = () => {
        setCardFlipped(!cardFlipped) // Flips the state if to see answer
    }
    return (
        <div className="cards" onClick={flipCard}>
            <div className={`card-inner ${cardFlipped ? "flipped" : ""}`}>
                <div className="card-question">
                    {props.question}
                </div>
                <div className="card-answer">
                    {props.answer}
                </div>

            </div>
            
        </div>
    );

};


export default Card;