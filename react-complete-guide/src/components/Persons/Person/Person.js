import React, { Component, Fragment } from "react";
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from "./index.css";

class Person extends Component {
  render() {
    const style = {
      "@media (min-width : 500px)": {
        width: "450px",
      },
    };
    console.log("[Person.js] rendering ...");
    return (
     <Aux>
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input 
        key="i3" 
        type="text"
         onChange={this.props.changed} 
        value={this.props.name} />
        <input
        key="i4" 
        type="text" onChange={this.props.dob} />
      {/* // </div> */}
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
