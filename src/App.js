import './App.css';
import Component from './Component';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <Component ans={[{ id: 0, name: 'Option 1' },
    { id: 1, name: 'Option 2' },
    { id: 2, name: 'Option 3' },
    { id: 3, name: 'Option 4' },]} correct={0} ques={"THIS IS THE GIVEN QUESTION?"} />
       
      </DndProvider>
    </div>
  );
}

export default App;
