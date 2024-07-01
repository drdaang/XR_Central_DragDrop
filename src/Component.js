import React, { useState } from "react";
import './Component.css';
import DraggableOption from "./DraggableOption";
import itemTypes from "./itemTypes.js";
import BoxTarget from "./BoxTarget.js";

const Component = ({ans,correct,ques}) => {
    let [list, setList] = useState([]);
    

    
    let correctAns = ans[correct];

    
    const handleChkAns = () => {
        if (list.length == 1 && list[0].text == correctAns) {
            console.log("CORRECT!");
            alert("CORRECT!")
        }
        else {
            console.log("WRONG! Try Again!");
            alert("WRONG! Try Again!")
        }
        setList([])
        
        console.log(correctAns)
        console.log("check answer");
    }

    return (
        <div className="card">
            <h2 style={{color:"blue", fontSize:"2rem"}}>{ques}</h2>
            <div className="card-body">
                <BoxTarget list={list} setList={setList} correctAns={correctAns}/>
                <div className="card-options">
                    <div className="quiz-card">
                        <div className="row1">
                        <DraggableOption optionText={ans[0].name} optionId={ans[0].id} />
                        <DraggableOption optionText={ans[1].name} optionId={ans[1].id}/>
                        </div>
                        <div className="row2">
                        <DraggableOption optionText={ans[2].name}optionId={ans[2].id} />
                        <DraggableOption optionText={ans[3].name} optionId={ans[3].id} />
                        </div>
                    </div>
                </div>
            </div>
            <button className="check-answer-btn" onClick={handleChkAns}>Check Answer</button>
        </div>
    );
}

export default Component;
