import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./FlashCard.css";

const Flashcard = ({ ans, ques,correct }) => {
  const [isFlipped, setIsFlipped] = useState(false);
    const handleChkAns = (e) => {
        if (ans[correct] == e.target.innerText) {
            alert("Correct Answer!")
        }
        else {
            alert("Wrong Answer!")
        }
        e.preventDefault();
    }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="reveal" onClick={() => {
            setIsFlipped(!isFlipped);
          }}>
        <h1>Wanna Reveal the Question?</h1>

      </div>
      <div className="card" onClick={() => {
            setIsFlipped(!isFlipped);
          }}>
        <div ></div>
        <h2 style={{ color: "blue", fontSize: "2rem" }}>{ques}</h2>
        <div className="card-body">
          <div className="card-options">
          <div className="quiz-card">
              <div className="row1">
                {ans.slice(0, 2).map((option) => (
                    <div onClick={handleChkAns } className="option" key={option.id}>
                    <label htmlFor={option.id}>{option.name}</label>
                  </div>
                ))}
              </div>
              <div className="row2">
                {ans.slice(2, 4).map((option) => (
                  <div onClick={handleChkAns } className="option" key={option.id}>
                    <label htmlFor={option.id}>{option.name}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button
          className="check-answer-btn"  
        >
          Check Answer
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default Flashcard;
