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
    num1: null | number,
    num2: null | number,
    operator: string,
    operatorChosen: boolean,
    answer: number
}

class App extends Component<{}, State> {
  state = {
    numbers: [7,8,9,4,5,6,1,2,3],
    operators: ["%","X","-","+"],
    display: "",
    num1: null,
    num2: null,
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
       console.log("update num2 here")
      ) : (
        console.log("update num1 here")
      )}
    );
  };

  operatorClick = (e:any) => {
    console.log("operator clicked")
    let displayNum = parseInt(this.state.display)
    this.setState(
      {num1: displayNum},
      () => {
        this.setState({display:""})
      }
    );
    this.setState({operatorChosen:true})
    let val = e.target.value
    this.setState({operator:val})
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
              {this.state.num1} {this.state.operator} {this.state.num2}
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
