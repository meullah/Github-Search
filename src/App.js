import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Layout/Navbar";
import Users from "./components/Users/Users";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
