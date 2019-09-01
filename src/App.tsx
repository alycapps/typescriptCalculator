import React from 'react';
import './App.css';
import NumberBtn from "./components/NumberBtn";


export interface Props {

}

interface State {
    numbers: number[]
}

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Practice Calulator</h1>
      <NumberBtn number={1}/>
    </div>
  );
}

export default App;
