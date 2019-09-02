import React from "react";
 
export interface Props {
  operator: string,
  operatorClick: any
}

const OperatorBtn = (props: Props) => (
  // <span className="col-md-1">
   <button value={props.operator} type="button" className="btn btn-primary" onClick={props.operatorClick} style={style}>
     {props.operator}
   </button>
//  </span>
);
const style = {
  width: "100%",
  padding: "0",
}
export default OperatorBtn;