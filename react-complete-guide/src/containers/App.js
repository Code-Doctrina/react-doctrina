import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "89381", name: "Max", age: 28 },
      { id: "89382", name: "Manu", age: 29 },
      { id: "89383", name: "Stephanie", age: 26 },
    ],
    otherState: "Some Other Valuer",
    showPersons: false,
    showCockpit: true,
  };
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[App.js] getDerivedStateFromProps", props);
  //   return state;
  // }
  // componentWillMount() {
  //   console.log("[Persons.js] componentWillMount ...");
  // }

  componentDidMount() {
    console.log("[Persons.js] componentDidMount ...");
  }

  componentDidUpdate() {
    console.log("[Persons.js] componentDidUpdate ...");
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    return true;
  }

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
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showCockpit:false})}}>Remove Cockpit</button>
        
        
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        /> : null}
        {persons}
      </div>
    );
    //  return React.createElement('div', {className: 'App'},React.createElement('h1',null, 'Does this work now?'));
  }
}

export default App;
