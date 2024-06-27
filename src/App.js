import './App.css';
import Component from './Component';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Component ans={["speak", "very well","I","can"]} correct={0} ques={"THIS IS THE GIVEN QUESTION?"} />
       
      </DndProvider>
    </div>
  );
}

export default App;
