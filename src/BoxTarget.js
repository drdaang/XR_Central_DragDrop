import React from 'react';
import { useDrop } from 'react-dnd';
import itemTypes from './itemTypes';
import { useState } from 'react';

const BoxTarget = ({  setList,correctAns }) => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [{ isOver }, drop] = useDrop({
        accept: itemTypes.CARD,
        hover: (item) => {
            setHoveredItem(item.text);
          },
        drop: (item, monitor) => {
            
            if (item.text==correctAns) {
                console.log("CORRECT!");
                alert("CORRECT!")
            }
            else {
                console.log("WRONG! Try Again!");
                alert("WRONG! Try Again!")
            }
            setList([])
            
    
            
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });


    return (
        <div ref={drop} style={{ backgroundColor: isOver ? "cyan" : "#fff" }} className="dropzone">
            {isOver?hoveredItem:"drop down"}
        </div>
    );
}

export default BoxTarget;
