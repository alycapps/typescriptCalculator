import React from "react";
 
export interface Props {
  operator: string,
  operatorClick: any
}

const OperatorBtn = (props: Props) => (
  <span className="col-md-1">
   <button value={props.operator} type="button" className="btn btn-primary" onClick={props.operatorClick}>
     {props.operator}
   </button>
 </span>
);

export default OperatorBtn;