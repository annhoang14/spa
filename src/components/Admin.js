import React, { Component } from "react";

import AllTeachers from "./AllTeachers.js";
import AllStudents from "./AllStudents.js";
import AllClasses from "./AllClasses.js";

import * as firebase from 'firebase';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allTeachers: [],
            allClasses: [],
            allStudents: [
                {
                    firstName: "Ann",
                    lastName: "Hoang",
                    id: 1,
                    age: 10,
                    grade: 3,
                    class: "",
                    isEnrolled: true,
                    role: "Student",
                },
            ],

            isExamineT: false,
            isExamineS: false,
            isExamineC: false,
        }
    }

    toggleExamineTeacher = () => {
        this.setState({ isExamineT: true, isExamineS: false, isExamineC: false })
    }
    toggleExamineStudent = () => {
        this.setState({ isExamineT: false, isExamineS: true, isExamineC: false })
    }
    toggleExamineClass = () => {
        this.setState({ isExamineT: false, isExamineS: false, isExamineC: true })
    }
    toggleHome = () => {
        this.setState({ isExamineT: false, isExamineS: false, isExamineC: false })
    }

    addTeacher = (state) => {
        var newTeacher = {
            name: state.name,
            role: state.role,
            id: state.id,
            class: state.class
        }
        this.setState(prevState => {
            return ({
                allTeachers: [...prevState.allTeachers, newTeacher]
            })
        })
    }
    deleteAllTeachers = () => {
        let resetArr = []
        this.setState(prevState => {
            return ({
                allTeachers: resetArr
            })
        })
    }

    addStudent = (state) => {
        var newStudent = {
            firstName: state.firstName,
            lastName: state.lastName,
            id: state.id,
            age: state.age,
            grade: state.grade,
            class: state.class,
            isEnrolled: state.isEnrolled,
            role: state.role,
        };
        this.setState(prevState => {
            return ({
                allStudents: [...prevState.allStudents, newStudent]
            })
        })
    }

    deleteAllStudents = () => {
        let resetArr = []
        resetArr.push(this.state.allStudents[0])
        this.setState(prevState => {
            return ({
                allStudents: resetArr
            })
        })
    }

    addClass = (state) => {
        var newClass = {
            subject: state.subject,
            teacher: state.teacher,
            id: state.id,
        }
        this.setState(prevState => {
            return ({
                allClasses: [...prevState.allClasses, newClass]
            })
        })
    }

    deleteAllClasses = () => {
        let resetArr = []
        this.setState(prevState => {
            return ({
                allClasses: resetArr
            })
        })
    }

    render() {
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className="Title">
                            SPA
            </Typography>

                        <Button
                            name="homeB"
                            color="inherit"
                            onClick={this.toggleHome}
                        > HOME
            </Button>

                        <Button
                            name="teacherB"
                            color="inherit"
                            onClick={this.toggleExamineTeacher}
                        > Teachers
            </Button>

                        <Button
                            name="studentB"
                            color="inherit"
                            onClick={this.toggleExamineStudent}
                        > Students
            </Button>

                        <Button
                            name="classB"
                            color="inherit"
                            onClick={this.toggleExamineClass}
                        > Classes
            </Button>

                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>

                {
                    this.state.isExamineS ?
                        <div className="listStudents">
                            <AllStudents
                                allStudents={this.state.allStudents}
                                addStudent={this.addStudent}
                                deleteAllStudents={this.deleteAllStudents}
                            />
                        </div>
                        :
                        <div>
                            {(this.state.isExamineC) ?
                                <div className="listClasses">
                                    <AllClasses
                                        allClasses={this.state.allClasses}
                                        addClass={this.addClass}
                                        deleteAllClasses={this.deleteAllClasses}
                                    />
                                </div>
                                :
                                <div>
                                    {(this.state.isExamineT) ?
                                        <div className="listTeachers">
                                            <AllTeachers
                                                allTeachers={this.state.allTeachers}
                                                addTeacher={this.addTeacher}
                                                deleteAllTeachers={this.deleteAllTeachers}
                                            />
                                        </div>
                                        :
                                        <div className="Home">
                                            <h1>Welcome to TJ Elementary School Dashboard!</h1>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                }

                {/* <div className="test">
          <h1>{this.state.speed}</h1>
        </div> */}

            </div >
        );
    }
}
