import React, { Component } from "react";
import Teacher from "./Teacher.js";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';

import TeacherEdit from "./TeacherEdit.js";
import TeacherNotEdit from "./TeacherNotEdit.js";

export default class AllTeachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdding: false,
        }
    }

    toggleAdding = () => {
        this.setState({
            isAdding: true
        })
    }

    addTeacher = (state) => {
        this.setState({
            isAdding: false
        })
        this.props.addTeacher(state);
    }

    render() {
        return (
            <div>
                <div className="TeacherList">
                    {this.props.allTeachers.map(teacher => {
                        return (
                            <Card key={teacher.id} variant="outlined">
                                {(teacher.isEditing) ?
                                    <TeacherEdit
                                        teacher={teacher}
                                        toggleEditing={this.props.toggleEditing}
                                        editPerson={this.props.editPerson}
                                    />
                                    :
                                    <TeacherNotEdit
                                        teacher={teacher}
                                        toggleEditing={this.props.toggleEditing}
                                        deleteIndiv={this.props.deleteIndiv}
                                    />
                                }
                            </Card>
                        )
                    })}
                </div>
                <div>
                    {(this.state.isAdding) ?
                        <Teacher
                            addTeacher={this.addTeacher}
                        />
                        :
                        <div>
                            <Tooltip title="Add New Teacher">
                                <IconButton
                                    id="addTeacherB"
                                    size="medium"
                                    color="primary"
                                    onClick={() => this.toggleAdding()}
                                >
                                    <CreateIcon /> Add New Teacher
                        </IconButton>
                            </Tooltip>
                            <IconButton
                                id="deleteAllTeachersB"
                                size="medium"
                                color="secondary"
                                onClick={() => this.props.deleteAllTeachers()}
                            >
                                Delete All
                        </IconButton>
                        </div>
                    }

                </div>
            </div >
        )
    }
}