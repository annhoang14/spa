import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

export default class ClassEdit extends Component {
    render() {
        return (
            <div>
                <CardHeader
                    title={
                        <TextField
                            required
                            id="subject"
                            name="subject"
                            label="Subject"
                            placeholder="Subject"
                            value={this.props.classItem.subject}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.props.editClass(event, this.props.classItem)}
                        />
                    }
                    subheader={
                        <div>
                            <TextField
                                required
                                id="teacher"
                                name="teacher"
                                label="Teacher"
                                placeholder="Choose teacher"
                                value={this.props.classItem.teacher}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => this.this.props.editClass(event, this.props.classItem)}
                            />
                    | <strong>{this.props.classItem.id}</strong></div>}
                />
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                >
                    <CardActions>
                        <Button
                            variant="contained"
                            id="cancelEdit"
                            size="small"
                            color="primary"
                            onClick={() => this.props.toggleEditClass(this.props.classItem)}
                        >
                            Save
                        </Button>
                    </CardActions>
                </Grid>
            </div>
        )
    }
}