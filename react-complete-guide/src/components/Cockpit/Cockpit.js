import React, { useEffect } from "react";
import classes from "./index.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] UseEffect ...");
    // Http Request ..
  });

  const assignedClassess = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClassess.push(classes.red); // classes  = ['red]
  }

  if (props.persons.length <= 1) {
    assignedClassess.push(classes.bold); // Classes = ['red', 'bold]
  }
  // let classes = ['red', 'bold'].join(' ');

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClassess.join(" ")}>This is really working!!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
