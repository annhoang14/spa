import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';


export default class StudentNotEdit extends Component {
    render() {
        return (
            <div>
                <CardHeader
                    title={<h2><strong>{this.props.student.lastName}, {this.props.student.firstName}</strong></h2>}
                    subheader={<div><em>{this.props.student.role}</em> | <strong>{this.props.student.id}</strong></div>}
                />
                <CardContent>
                    <p><strong>Age:</strong> {this.props.student.age}</p>
                    <p><strong>Grade:</strong> {this.props.student.grade}</p>
                    <p><strong>Class:</strong> {this.props.student.class}</p>
                    <p><strong>Enrolled:</strong> {this.props.formatEnrolled(this.props.student)}</p>
                </CardContent>

                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                >
                    <CardActions>
                        <Tooltip title="Edit">
                            <IconButton
                                id="editS"
                                value={this.props.student.id}
                                aria-label="edit"
                                size="small"
                                onClick={() => this.props.toggleEditing(this.props.student)}
                            >
                                <CreateIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <IconButton
                                id="deleteS"
                                aria-label="delete"
                                size="small"
                                color="secondary"
                                onClick={() => this.props.deleteIndiv(this.props.student)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                </Grid>
            </div>
        )
    }
}
