import React, { Component } from 'react';
import './App.css';
import NumberBtn from "./components/NumberBtn";
import { thisExpression } from '@babel/types';
// import { number } from 'prop-types';
// import { render } from 'react-dom';


export interface Props {

}

interface State {
    numbers: number[]
}

class App extends Component<{}, State> {
  state = {
    numbers: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    // number: 2
  }
  
  public render() {
    return (
      <div className="App">
        <h1>Practice Calulator</h1>
        {this.state.numbers.map(number => (
          <NumberBtn number={number}/>
        ))}
      </div>
    );
  }

}

export default App;
