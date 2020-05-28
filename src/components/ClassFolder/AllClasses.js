import React, { Component } from "react";
import Class from "./Class.js";
import ClassNotEdit from "./ClassNotEdit.js";
import ClassEdit from "./ClassEdit.js";

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';

export default class AllClasses extends Component {
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

    addClass = (state) => {
        this.setState({
            isAdding: false
        })
        this.props.addClass(state);
    }

    render() {
        return (
            <div>
                <div className="ClassList">
                    {this.props.allClasses.map(classItem => {
                        return (
                            <Card key={classItem.id} variant="outlined">
                                {classItem.isEditing ?
                                    <ClassEdit
                                        classItem={classItem}
                                        toggleEditClass={this.props.toggleEditClass}
                                        editClass={this.props.editClass}
                                    />

                                    :
                                    <ClassNotEdit
                                        classItem={classItem}
                                        toggleEditClass={this.props.toggleEditClass}
                                        deleteIndiv={this.props.deleteIndiv}
                                    />
                                }
                            </Card>
                        )
                    })}
                </div>
                <div>
                    {(this.state.isAdding) ?
                        <Class
                            addClass={this.addClass}
                        />
                        :
                        <div>
                            <Tooltip title="Add New Class">
                                <IconButton
                                    id="addClassB"
                                    size="medium"
                                    color="primary"
                                    onClick={() => this.toggleAdding()}
                                >
                                    <CreateIcon /> Add New Class
                        </IconButton>
                            </Tooltip>

                            <IconButton
                                id="deleteAllClassesB"
                                size="medium"
                                color="secondary"
                                onClick={() => this.props.deleteAllClasses()}
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