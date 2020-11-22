import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "Some Other Valuer",
  };

  switchNameHandler = (newName) => {
    // console.log("Was Clicked");
    this.state.persons[0].name = "Gilwell Muhati";
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is really working!!</p>
        <button onClick={() => this.switchNameHandler("Muhatiiii")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Muhati!!")}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    //  return React.createElement('div', {className: 'App'},React.createElement('h1',null, 'Does this work now?'));
  }
}

export default App;
