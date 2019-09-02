import React, { Component } from 'react';
import './App.css';
import NumberBtn from "./components/NumberBtn";
import OperatorBtn from "./components/OperatorBtn";
import OtherBtn from "./components/OtherBtn";
// import { number } from 'prop-types';
// import { thisExpression } from '@babel/types';
// import { number } from 'prop-types';
// import { render } from 'react-dom';

// No Props
// export interface Props {
// }

interface State {
    numbers: number[],
    operators: string[],
    display: string | number,
    num1: number,
    num2: number,
    operator: string,
    answer: number
}

class App extends Component<{}, State> {
  state = {
    numbers: [7,8,9,4,5,6,1,2,3],
    operators: ["%","X","-","+"],
    display: "",
    num1: 0,
    num2: 0,
    operatorChosen: false,
    operator: "",
    answer: 0
  };

  numberClick = (e:any) => {
    let val = e.target.value
    this.setState((prevState) => {
      return {display: prevState.display + val}
    }, 
     () => {(this.state.operatorChosen) ? (
       console.log("update num1 here")
      ) : (
        console.log("update num2 here")
      )}
    );
  };
  operatorClick = (e:any) => {
    console.log("operator clicked")
    let val = e.target.value
    this.setState({display:""})
    // this.setState({operatorChosen:true)
  };
  clearClick = () => {
    console.log("clear clicked")
  };
  equalClick = () => {
    console.log("equal clicked")
  };

  public render() {
    return (
      <div className="App">
        <h1>Practice Calulator</h1>
        <div className="container">
        

        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 typed">
              {/* numbers already done */}
            </div>
            <div className="col-md-4"></div>
          </div>

          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              {/* typing location */}
              <div className="form-group">
                <input className="form-control" id="display" aria-describedby="calculatordisplay" placeholder={this.state.display} readOnly/>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>

          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <OtherBtn other={"<"} otherClick={this.clearClick}/>
              <OtherBtn other={"Clear"} otherClick={this.clearClick}/>
            </div>
            <div className="col-md-4"></div>
          </div>
          
          <div className="row">
            <div className="col-md-4"></div>
            {/* numbers location */}
            <div className="col-md-3">
              {this.state.numbers.map(number => (
                <NumberBtn number={number} numberClick={this.numberClick}/>
              ))}
              {/* final row */}
              <OperatorBtn operator={"."} operatorClick={this.operatorClick}/>
              <NumberBtn number={0} numberClick={this.numberClick}/>
              <OtherBtn other={"="} otherClick={this.equalClick}/>
            </div>
            <div className="col-md-1">
              {this.state.operators.map(operator => (
                <OperatorBtn operator={operator} operatorClick={this.operatorClick}/>
              ))}
            </div>
            <div className="col-md-4"></div>
          </div>

          
        </div>
      </div>
    );
  }

}

export default App;
