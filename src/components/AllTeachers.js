import React, { Component } from "react";
import Teacher from "./Teacher.js";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';

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
                            <div key={teacher.id}>
                                <h2>{teacher.name}</h2>
                                <p><em>{teacher.role}</em></p>
                                <p><strong>Class</strong>: {teacher.class}</p>
                                <p><strong>ID</strong>: {teacher.id}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {(this.state.isAdding) ?
                        <Teacher
                            addTeacher={this.addTeacher}
                        />
                        :
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
                    }
                    <IconButton
                        id="deleteAllTeachersB"
                        size="medium"
                        color="secondary"
                        onClick={() => this.props.deleteAllTeachers()}
                    >
                        Delete All
                        </IconButton>
                </div>
            </div>
        )
    }
}