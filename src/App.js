import React, { Component } from "react";

import Admin from "./components/Admin.js";

import firebase from "./firebase.js"

import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //speed: 10,
      isAdmin: true,
      isTeacher: false,
      isStudent: false,
    }
  }
  /**
   * speedie 
   *    speed: field of speedie
   *    whatever: an object nested inside speedie
   *      whatevs: field of whatver
   */

  // //writes asynchronously to database
  // //waits for setState
  // writeScoreToDB = async () => {
  //   firebase.database().ref('speedie/whatever').set({
  //     whatevs: 200
  //   });
  // }

  // componentDidMount() {
  //   const speedRef = firebase.database().ref('speedie/whatever');
  //   speedRef.on('value', snap => {
  //     console.log(snap.val())
  //     this.setState({
  //       speed: snap.val()
  //     });
  //   });

  // }

  render() {
    //this.writeScoreToDB()
    return (
      <div className="App">

        {(this.state.isAdmin) ?
          <div>
            {/* {JSON.stringify(this.state.speed)} */}
            <Admin />
          </div>
          : <div><strong>You do not have access!</strong></div>
        }


        {/* <div className="test">
          <h1>{this.state.speed}</h1>
        </div> */}

      </div >
    );
  }
}
