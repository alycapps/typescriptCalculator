import React from "react";
 
export interface Props {
  operator: string
}

const OperatorBtn = (props: Props) => (
  <span className="col-md-1">
   <button value={props.operator} type="button" className="btn btn-primary">
     {props.operator}
   </button>
 </span>
);

export default OperatorBtn;