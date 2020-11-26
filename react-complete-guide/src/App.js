import React, { Component } from "react";
import classes from  "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "89381", name: "Max", age: 28 },
      { id: "89382", name: "Manu", age: 29 },
      { id: "89383", name: "Stephanie", age: 26 },
    ],
    otherState: "Some Other Valuer",
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    // console.log("This is the Persons State", persons);
    console.log("This is the Persons State", this.state.persons);
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    console.log("This is the personIndex State", personIndex);
    console.log("This is the Persons State", this.state.persons);

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    console.log("This is the Persons State", persons);

    this.setState({
      persons: persons,
    });
  };

  dateOfBirthHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: event.target.value },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   // ":hover": { // Uses Radium
    //   //   backgroundColor: "salmon",
    //   //   color: "black",
    //   // },
    //   borderRadius: "2px;",
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
     
      // style[":hover"] = {
      //   backgroundColor: "lightred",
      //   color: "black",
      // };
    }

    const assignedClassess = [];
    if (this.state.persons.length <= 2) {
      assignedClassess.push(classes.red); // classes  = ['red]
    }

    if (this.state.persons.length <= 1) {
      assignedClassess.push(classes.bold); // Classes = ['red', 'bold]
    }
    // let classes = ['red', 'bold'].join(' ');

    return (
        <div className={classes.App}>
          <h1>Hi, I am a react app</h1>
          <p className={assignedClassess.join(' ')}>This is really working!!</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
    //  return React.createElement('div', {className: 'App'},React.createElement('h1',null, 'Does this work now?'));
  }
}

export default App;
