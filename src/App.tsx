import React, { Component, MouseEvent } from 'react';
import './App.css';
import NumberBtn from "./components/NumberBtn";
import OperatorBtn from "./components/OperatorBtn";
import OtherBtn from "./components/OtherBtn";
import InvisibleBtn from "./components/InvisibleBtn"

// No Props on this level
// export interface Props {
// }

//typing for state
interface State {
    numbers: number[],
    operators: string[],
    display: string | number | undefined,
    num1: number,
    num2: number,
    operator: string,
    operatorChosen: boolean,
    answerCalculated: boolean
};

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

  // will update display state to include new value clicked
  // will add value to num1 or num2 depending on if an operator has been chosen yet
  numberClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let val:string = e.currentTarget.value
    this.setState((prevState) => {
      return {display: prevState.display + val}
    });
  };

  // will update num1 to display state
  // will update display state to empty string
  // will update operatorChosen
  // will update operator
  operatorClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let displayNum: number = parseFloat(this.state.display)
    this.setState(
      {num1: displayNum},
      () => {
        this.setState({display:""})
      }
    );
    this.setState({operatorChosen:true})
    let val:string = e.currentTarget.value
    this.setState({operator:val})
  };

  //will set all states back to defaults
  clearClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    this.setState({operatorChosen:false})
    this.setState({operator:""})
    this.setState({num1:0})
    this.setState({num2:0})
    this.setState({display:""})
    this.setState({answerCalculated:false})
  };

  // will remove last number clicked
  // will not work for operators
  backspaceClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    let newDisplayState: string = "";
    for (let i=0; i<(this.state.display.length-1); i++) {
      newDisplayState = newDisplayState + this.state.display[i]
    }
    this.setState({display: newDisplayState});
  };

  // will update num2 to display state
  // will perform math based on operator chosen
  // will update display with answer
  // will update answerCalculated
  equalClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
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
        <h1>Typescript Calulator</h1>
        <div className="container">
        
        {/* row where num1 operator and num2 is displayed */}
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 typed">
              {(this.state.operatorChosen) ? (<span>{this.state.num1} {this.state.operator}</span>) : ("")}
              {(this.state.answerCalculated) ? (<span> {this.state.num2}</span>) : ("")}
            </div>
            <div className="col-md-4"></div>
          </div>

          {/* row where the form field is displayed */}
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4" style={style.noPadding}>
              <div className="form-group">
                <input className="form-control" id="display" aria-describedby="calculatordisplay" placeholder={this.state.display} readOnly/>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>

          {/* row for backspace and clear */}
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-3" style={style.noPadding}>
              <InvisibleBtn />
              <OtherBtn other={"<"} otherClick={this.backspaceClick}/>
              <OtherBtn other={"Clear"} otherClick={this.clearClick}/>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4"></div>
          </div>
          
          <div className="row">
            <div className="col-md-4"></div>

            {/* column for numbers location */}
            <div className="col-md-3" style={style.noPadding}>
              {this.state.numbers.map(number => (
                <NumberBtn number={number} numberClick={this.numberClick}/>
              ))}

              {/* final row */}
              <NumberBtn number={"."} numberClick={this.numberClick}/>
              <NumberBtn number={0} numberClick={this.numberClick}/>
              <OtherBtn other={"="} otherClick={this.equalClick}/>
            </div>

            {/* column for operators location */}
            <div className="col-md-1" style={style.noPadding}>
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
};

const style ={
  noPadding: {
    padding: "0px"
  }
};

export default App;