import React from 'react';
import { useDrop } from 'react-dnd';
import itemTypes from './itemTypes';

const BoxTarget = ({ list, setList , correctAns }) => {

    const [{ isOver }, drop] = useDrop({
        accept: itemTypes.CARD,
        drop: (item, monitor) => {
            setList([item]);
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
            
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const lsvalue = () => {
        if (list.length === 0) {
            return <div>drop zone</div>;
        } else {
            console.log(list);
            return list.map((item, index) => (
                <div key={index}>
                    {item.text}
                </div>
            ));
        }
    };

    return (
        <div ref={drop} style={{ backgroundColor: isOver ? "cyan" : "#fff" }} className="dropzone">
            {lsvalue()}
        </div>
    );
}

export default BoxTarget;
