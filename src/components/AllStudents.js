import React, { Component } from "react";
import Student from "./Student.js";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';

export default class AllStudents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdding: false,
        }
    }

    formatEnrolled = (student) => {
        if (student.isEnrolled) {
            return "Enrolled"
        }
        else {
            return "Not Enrolled"
        }
    }

    toggleAdding = () => {
        this.setState({
            isAdding: true
        })
    }

    addStudent = (state) => {
        this.setState({
            isAdding: false
        })
        this.props.addStudent(state);
    }

    render() {
        return (
            <div>
                <div className="StudentList">
                    {this.props.allStudents.map(student => {
                        return (
                            <div key={student.id} className="studentItem">
                                <h2>{student.lastName}, {student.firstName}</h2>
                                <p><em>{student.role}</em></p>
                                <p><strong>Student ID:</strong> {student.id}</p>
                                <p><strong>Age:</strong> {student.age}</p>
                                <p><strong>Grade:</strong> {student.grade}</p>
                                <p><strong>Class:</strong> {student.class}</p>
                                <p><strong>Enrolled:</strong> {this.formatEnrolled(student)}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {(this.state.isAdding) ?
                        <Student
                            addStudent={this.addStudent}
                        />
                        :
                        <Tooltip title="Add New Student">
                            <IconButton
                                id="addStudentB"
                                size="medium"
                                color="primary"
                                onClick={() => this.toggleAdding()}
                            >
                                <CreateIcon /> Add New Student
                        </IconButton>
                        </Tooltip>
                    }
                    <IconButton
                        id="deleteAllStudentB"
                        size="medium"
                        color="secondary"
                        onClick={() => this.props.deleteAllStudents()}
                    >
                        Delete All
                        </IconButton>
                </div>
            </div>
        )
    }
}