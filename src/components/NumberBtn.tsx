import React from "react";

export interface Props {
  number: number;
};

const NumberBtn = (props: Props) => (
     <span className="col-md-1">
      <button value={props.number} type="button" className="btn btn-secondary">
        {props.number}
      </button>
    </span>
);

export default NumberBtn;