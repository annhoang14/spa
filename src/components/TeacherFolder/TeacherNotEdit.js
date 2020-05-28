import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';


export default class TeacherNotEdit extends Component {
    render() {
        return (
            <div>
                <CardHeader
                    title={<h2><strong>{this.props.teacher.name}</strong></h2>}
                    subheader={<div><em>{this.props.teacher.role}</em> | <strong>{this.props.teacher.id}</strong></div>}
                />
                {/* CardContent for students assigned */}
                <CardContent>
                    <p><strong>Class: </strong>{this.props.teacher.class}</p>
                </CardContent>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                >
                    <CardActions>
                        <Tooltip title="Edit">
                            <IconButton
                                id="editT"
                                aria-label="edit"
                                size="small"
                                onClick={() => this.props.toggleEditing(this.props.teacher)}
                            >
                                <CreateIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <IconButton
                                id="deleteT"
                                aria-label="delete"
                                size="small"
                                color="secondary"
                                onClick={() => this.props.deleteIndiv(this.props.teacher)}
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
