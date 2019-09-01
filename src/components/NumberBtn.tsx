import React from "react";

export interface Props {
  number: number;
};

const NumberBtn = (props: Props) => (
    <button type="button" className="btn btn-secondary">
      {props.number}
    </button>
);

export default NumberBtn;