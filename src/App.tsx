import React, { Component } from 'react';
import './App.css';
import NumberBtn from "./components/NumberBtn";
import OperatorBtn from "./components/OperatorBtn";
// import { thisExpression } from '@babel/types';
// import { number } from 'prop-types';
// import { render } from 'react-dom';


export interface Props {

}

interface State {
    numbers: number[],
    operators: string[]
}

class App extends Component<{}, State> {
  state = {
    numbers: [7,8,9,4,5,6,1,2,3,0],
    operators: ["%","X","-","+"]
  }
  
  public render() {
    return (
      <div className="App">
        <h1>Practice Calulator</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-3">
              {this.state.numbers.map(number => (
                <NumberBtn number={number}/>
              ))}
            </div>
            <div className="col-md-1">
              {this.state.operators.map(operator => (
                <OperatorBtn operator={operator} />
              ))}
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
