import React, { Component } from 'react';
import './App.css';
import Hello from './components/Hello';
import Todo from './components/Todo';
import Profile from './components/Profile';
import { httpClient } from "./helpers";


class App extends Component {
  state = {
    name: "Nathan",
    age: 0,
    todos: []
  }

  //default props sa class
  static defaultProps = {
    animal: "Hen"
  };

  handleTextChange = evt => {
    evt.persist();
    this.setState(
    {
      [evt.target.name]: evt.target.value
    }, 
    () =>{
      console.log(evt);
    });
  }

  showHomePage = () => {
    const { name, age } = this.state;
    return(
      <div className="App">
        <Hello name={name}/>
        <Profile/>
          <p>My Name is {name}</p>
          <p>My Age is {age}</p>
          <input type="text"
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={this.handleTextChange}
          />
          <br/>
          <input type="text"
            name="age"
            value={age}
            placeholder="Enter age"
            onChange={this.handleTextChange}
          />
      </div>
    )
  }

  showNotFound = () => {
    const { name } = this.state;
    return <div><h1>User is not {name}</h1></div>
  }

  logData = () => {
    console.log("Logging data!");
  }

  componentDidMount() {
    httpClient({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "get"
    }).then(response => {
      this.setState({
        todos: response.data
      })
    });
  }

  render() {
    const { name, todos } = this.state;

    //return name === 'Nathan' ? this.showHomePage() : this.showNotFound();
    return (
      <ul>
        {
          todos.map((todo, index) => {
            return <Todo todo={todo} key={index}/>;
          })
        }
      </ul>
    );
  }
}

export default App;
