import React, { Component } from "react";
import Student from "./Student.js";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';

import StudentNotEdit from "./StudentNotEdit.js";
import StudentEdit from "./StudentEdit.js";

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
                            <Card key={student.id} className="studentItem" variant="outlined">
                                {(student.isEditing) ?
                                    <StudentEdit
                                        student={student}
                                        toggleEditing={this.props.toggleEditing}
                                        editPerson={this.props.editPerson}
                                    />
                                    :
                                    <StudentNotEdit
                                        student={student}
                                        toggleEditing={this.props.toggleEditing}
                                        formatEnrolled={this.formatEnrolled}
                                        deleteIndiv={this.props.deleteIndiv}
                                    />
                                }
                            </Card>
                        )
                    })}
                </div>
                <div>
                    {(this.state.isAdding) ?
                        <Student
                            addStudent={this.addStudent}
                        />
                        :
                        <div>
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

                            <IconButton
                                id="deleteAllStudentB"
                                size="medium"
                                color="secondary"
                                onClick={() => this.props.deleteAllStudents()}
                            >
                                Delete All
                        </IconButton>
                        </div>
                    }

                </div>
            </div>
        )
    }
}