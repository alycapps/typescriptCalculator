import React from "react";

export interface Props {
  number: number | string;
  numberClick: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const NumberBtn: React.FunctionComponent<Props> = (props)  => (
      <button value={props.number} type="button" className="btn btn-secondary" onClick={props.numberClick} style={style} >
        {props.number}
      </button>
);

const style = {
  width: "33%",
  padding: "0"
};

export default NumberBtn;