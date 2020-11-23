import React from "react";
import './index.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName}</p>
      <p>Some random text!</p>
      <p>I hope I'll be overwritten!</p>
    </div>
  );
};

export default userOutput;
