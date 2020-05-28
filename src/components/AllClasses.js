import React, { Component } from "react";
import Class from "./Class.js";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';

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
                            <div key={classItem.id}>
                                <h2>{classItem.subject}</h2>
                                <p><em>{classItem.teacher}</em></p>
                                <p><strong>ID</strong>: {classItem.id}</p>
                            </div>
                        )
                    })}
                </div>
                <div>
                    {(this.state.isAdding) ?
                        <Class
                            addClass={this.addClass}
                        />
                        :
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
                    }
                    <IconButton
                        id="deleteAllClassesB"
                        size="medium"
                        color="secondary"
                        onClick={() => this.props.deleteAllClasses()}
                    >
                        Delete All
                        </IconButton>
                </div>
            </div>
        )
    }
}