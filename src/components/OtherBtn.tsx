import React from "react";

export interface Props {
  other: string;
  otherClick: any
};

const OtherBtn = (props: Props) => (
     <span className="col-md-1">
      <button type="button" className="btn btn-danger" onClick={props.otherClick}>
        {props.other}
      </button>
    </span>
);

export default OtherBtn;