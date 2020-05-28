import React, { Component } from "react";

import AllTeachers from "./TeacherFolder/AllTeachers.js";
import AllStudents from "./StudentsFolder/AllStudents.js";
import AllClasses from "./ClassFolder/AllClasses.js";

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
                    isEditing: false,
                },
            ],

            isExamineT: false,
            isExamineS: false,
            isExamineC: false,
        }
    }

    // //writes asynchronously to database
    // //waits for setState
    // writeScoreToDB = async () => {
    //     firebase.database().ref('admin').set({
    //         allStudents: this.state.allStudents
    //     });
    //     firebase.database().ref('allTeachers').set({
    //         allStudents: this.state.allTeachers
    //     });

    // }

    // componentDidMount() {
    //     const speedRef = firebase.database().ref('speedie');
    //     speedRef.on('value', snap => {
    //         console.log(snap.val())
    //         this.setState({
    //             speed: snap.val()
    //         });
    //     });

    // }

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

    toggleEditing = personToEdit => {
        if (personToEdit.role === "Student") {
            this.setState({
                allStudents: this.state.allStudents.map(student => {
                    if (student.id === personToEdit.id) {
                        return ({
                            ...student, //return all the other fields as the same
                            isEditing: !student.isEditing //toggle isEditing field to the opposite
                        })
                    }
                    return student;
                })
            })
        }
        else {
            this.setState({
                allTeachers: this.state.allTeachers.map(teacher => {
                    if (teacher.id === personToEdit.id) {
                        return ({
                            ...teacher, //return all the other fields as the same
                            isEditing: !teacher.isEditing //toggle isEditing field to the opposite
                        })
                    }
                    return teacher;
                })
            })
        }
    };

    editPerson = (event, personToEdit) => {
        const target = event.target;
        const value = target.value;
        const name = target.name; //either title or descr

        if (personToEdit.role === "Student") {
            this.setState({
                allStudents: this.state.allStudents.map(student => {
                    if (student.id === personToEdit.id) {
                        return {
                            ...student,
                            [name]: value,
                        }
                    }
                    return student;
                })
            })
        } else {
            this.setState({
                allTeachers: this.state.allTeachers.map(teacher => {
                    if (teacher.id === personToEdit.id) {
                        return {
                            ...teacher,
                            [name]: value,
                        }
                    }
                    return teacher;
                })
            })
        }
    };

    addTeacher = (state) => {
        var newTeacher = {
            name: state.name,
            role: state.role,
            id: state.id,
            class: state.class,
            isEditing: false,
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
            isEditing: false,
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
            isEditing: false,
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

    toggleEditClass = classToEdit => {
        this.setState({
            allClasses: this.state.allClasses.map(classItem => {
                if (classItem.id === classToEdit.id) {
                    return ({
                        ...classItem, //return all the other fields as the same
                        isEditing: !classItem.isEditing //toggle isEditing field to the opposite
                    })
                }
                return classItem;
            })
        })
    }

    editClass = (event, classToEdit) => {
        const target = event.target;
        const value = target.value;
        const name = target.name; //either title or descr
        this.setState({
            allClasses: this.state.allClasses.map(classItem => {
                if (classItem.id === classToEdit.id) {
                    return {
                        ...classItem,
                        [name]: value,
                    }
                }
                return classItem;
            })
        })
    }

    deleteIndiv = (indiv) => {
        if (indiv.role) {
            if (indiv.role === "Student") {
                const newStudentsList = this.state.allStudents.filter(student =>
                    student.id !== indiv.id
                );
                this.setState(prevState => {
                    return ({
                        allStudents: newStudentsList
                    })
                })
            } else {
                let newTeachersList = this.state.allTeachers.filter(teacher =>
                    teacher.id !== indiv.id
                )
                this.setState(prevState => {
                    return ({ allTeachers: newTeachersList })
                })
            }
        } else {
            let newClassList = this.state.allClasses.filter(classItem =>
                classItem.id !== indiv.id
            )
            this.setState(prevState => {
                return ({ allClasses: newClassList })
            })
        }
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
                            onClick={() => this.toggleHome()}
                        > HOME
            </Button>

                        <Button
                            name="teacherB"
                            color="inherit"
                            onClick={() => this.toggleExamineTeacher()}
                        > Teachers
            </Button>

                        <Button
                            name="studentB"
                            color="inherit"
                            onClick={() => this.toggleExamineStudent()}
                        > Students
            </Button>

                        <Button
                            name="classB"
                            color="inherit"
                            onClick={() => this.toggleExamineClass()}
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
                                toggleEditing={this.toggleEditing}
                                editPerson={this.editPerson}
                                deleteIndiv={this.deleteIndiv}
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
                                        toggleEditClass={this.toggleEditClass}
                                        editClass={this.editClass}
                                        deleteIndiv={this.deleteIndiv}
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
                                                toggleEditing={this.toggleEditing}
                                                editPerson={this.editPerson}
                                                deleteIndiv={this.deleteIndiv}
                                            />
                                        </div>
                                        :
                                        <div className="Home">
                                            <h1>Welcome to TJ Elementary School Admin Dashboard!</h1>
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
