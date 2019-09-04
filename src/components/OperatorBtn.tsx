import React from "react";
 
export interface Props {
  operator: string,
  operatorClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const OperatorBtn = (props: Props) => (
   <button value={props.operator} type="button" className="btn btn-primary" onClick={props.operatorClick} style={style}>
     {props.operator}
   </button>
);

const style = {
  width: "100%",
  padding: "0",
};

export default OperatorBtn;