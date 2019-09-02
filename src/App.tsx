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
    display: string | number | undefined,
    num1: number,
    num2: number,
    operator: string,
    operatorChosen: boolean,
    answerCalculated: boolean
}

class App extends Component<{}, State> {
  state = {
    numbers: [7,8,9,4,5,6,1,2,3],
    operators: ["/","x","-","+"],
    display: "",
    num1: 0,
    num2: 0,
    operatorChosen: false,
    operator: "",
    answerCalculated: false
  };

  numberClick = (e:any) => {
    let val:string = e.target.value
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
    let displayNum: number = parseFloat(this.state.display)
    this.setState(
      {num1: displayNum},
      () => {
        this.setState({display:""})
      }
    );
    this.setState({operatorChosen:true})
    let val:string = e.target.value
    this.setState({operator:val})
  };

  clearClick = () => {
    this.setState({operatorChosen:false})
    this.setState({operator:""})
    this.setState({num1:0})
    this.setState({num2:0})
    this.setState({display:""})
    this.setState({answerCalculated:false})
  };

  backspaceClick = () => {
    var newDisplayState: string = "";
    for (let i=0; i<(this.state.display.length-1); i++) {
      newDisplayState = newDisplayState + this.state.display[i]
    }
    this.setState({display: newDisplayState});
  };

  equalClick = () => {
    console.log("equal clicked")
    let displayNum: number = parseFloat(this.state.display)
    this.setState(
      {num2: displayNum},
      () => {
        let answer: number | string;
        switch(this.state.operator) {
          case "/":
            answer = this.state.num1 / this.state.num2;
            break;
          case "x":
            answer = this.state.num1 * this.state.num2;
            break;
          case "-":
            answer = this.state.num1 - this.state.num2;
            break;
          case "+":
            answer = this.state.num1 + this.state.num2;
            break;
          default:
            answer = "something went wrong"
        }
        this.setState({display:answer})
        this.setState({answerCalculated:true})

      }
    );
  };

  public render() {
    return (
      <div className="App">
        <h1>Practice Calulator</h1>
        <div className="container">
        

        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 typed">
              {(this.state.operatorChosen) ? (<span>{this.state.num1} {this.state.operator}</span>) : ("")}
              {(this.state.answerCalculated) ? (<span> {this.state.num2}</span>) : ("")}
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
              <OtherBtn other={"<"} otherClick={this.backspaceClick}/>
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
              <NumberBtn number={"."} numberClick={this.numberClick}/>
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
