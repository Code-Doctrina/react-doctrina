import React from "react";
import classes from  "./index.css";

const person = (props) => {
  const style ={
    '@media (min-width : 500px)': {
      width: '450px'
    }
  }

  const rnd = Math.random();

  if(rnd > 0.7){
    throw new Error('Something Went wrong');
  }

  return (
   
    <div className={classes.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
      <input type="text" onChange={props.dob} />
    </div>
  );
};

export default person;
