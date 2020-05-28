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

export default class TeacherEdit extends Component {
    render() {
        return (
            <div>
                <CardHeader
                    title={
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            placeholder="Teacher's Name"
                            value={this.props.teacher.name}
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) => this.props.editPerson(event, this.props.teacher)}
                        />
                    }
                    subheader={
                        <div>
                            <TextField
                                required
                                id="class"
                                name="class"
                                label="Class"
                                placeholder="Choose class"
                                value={this.props.teacher.class}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => this.props.editPerson(event, this.props.teacher)}
                            />
                    | <strong>{this.props.teacher.id}</strong></div>}
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
                            onClick={() => this.props.toggleEditing(this.props.teacher)}
                        >
                            Save
                        </Button>
                    </CardActions>
                </Grid>
            </div>
        )
    }
}