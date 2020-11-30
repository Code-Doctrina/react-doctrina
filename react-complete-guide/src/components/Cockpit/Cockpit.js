import React, { useEffect } from "react";
import classes from "./index.css";

const cockpit = (props) => {
  // useEffect(() => {
  //   console.log("[Cockpit.js] UseEffect ...");
  //   // Http Request ..
  //   setTimeout(() => {
  //     alert('Saved data to cloud')
  //   }, 1000);
  // }, [props.persons]);

  useEffect(() => {
    console.log("[Cockpit.js] UseEffect ...");
    // Http Request ..
    setTimeout(() => {
      alert('Saved data to cloud')
    }, 1000);
    return () => {
      console.log("[Cockpit.js] cleaunup in useEffect()" )
    }
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] cleaunup 2nd in useEffect()" )
    return () => {
      console.log("[Cockpit.js] cleaunup in 2nd useEffect()" )
    }

  })

  const assignedClassess = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClassess.push(classes.red); // classes  = ['red]
  }

  if (props.personsLength <= 1) {
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

export default React.memo(cockpit);
