import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';


export default class ClassNotEdit extends Component {
    render() {
        return (
            <div>
                <CardHeader
                    title={<h2><strong>{this.props.classItem.subject}</strong></h2>}
                    subheader={<div><em>{this.props.classItem.teacher}</em> | <strong>{this.props.classItem.id}</strong></div>}
                />
                {/* CardContent for students assigned */}
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                >
                    <CardActions>
                        <Tooltip title="Edit">
                            <IconButton
                                id="editC"
                                aria-label="edit"
                                size="small"
                                onClick={() => this.props.toggleEditClass(this.props.classItem)}
                            >
                                <CreateIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <IconButton
                                id="deleteNote"
                                aria-label="delete"
                                size="small"
                                color="secondary"
                                onClick={() => this.props.deleteIndiv(this.props.classItem)}
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
