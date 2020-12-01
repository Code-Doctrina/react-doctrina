import React, { Component, Fragment } from "react";
import PropTypes  from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from "./index.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount(){
    // document.querySelector('input').focus();
    // this.inputElement.focus()
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }


  render() {
    const style = {
      "@media (min-width : 500px)": {
        width: "450px",
      },
    };
    console.log("[Person.js] rendering ...");
    return (
     <Aux>
      {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}

       {/* <AuthContext.Consumer>
         {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
       </AuthContext.Consumer> */}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input 
        key="i3" 
        //ref={(inputEl) => {this.inputElement = inputEl}}
        ref={this.inputElementRef}
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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);
