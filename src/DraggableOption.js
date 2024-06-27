import React from 'react';
import { useDrag } from "react-dnd";
import itemTypes from './itemTypes';

const DraggableOption = ({optionText,optionId}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        
        type: itemTypes.CARD,
        item: { id: optionId ,text: optionText},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    
        
    return (
        <div className="option" ref={drag} style={{opacity:isDragging?0.5:1}}>
            <label htmlFor={optionId}>{String.fromCharCode(optionId+65)}. {optionText}</label>
        </div>
    );
}
export default DraggableOption;