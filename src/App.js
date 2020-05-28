import React, { Component } from "react";

import Admin from "./components/Admin.js";

import * as firebase from 'firebase';

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      speed: 10,
      isAdmin: true,
      isTeacher: false,
      isStudent: false,
    }
  }

  componentDidMount() {
    const speedRef = firebase.database().ref('speed');
    speedRef.once('value', snap => {
      this.setState({
        speed: snap.val() //updates with new value in database for speed after rendering
      });
    });
  }

  render() {
    return (
      <div className="App">
        {(this.state.isAdmin) ?
          <Admin /> : <div><strong>You do not have access!</strong></div>
        }


        {/* <div className="test">
          <h1>{this.state.speed}</h1>
        </div> */}

      </div >
    );
  }
}
