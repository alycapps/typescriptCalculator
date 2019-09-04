import React from "react";

export interface Props {
  other: string;
  otherClick: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const OtherBtn = (props: Props) => (
      <button type="button" className="btn btn-danger" onClick={props.otherClick} style={style}>
        {props.other}
      </button>
);

const style = {
  width: "33%",
  padding: "0",
};

export default OtherBtn;