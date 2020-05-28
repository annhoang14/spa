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

export default class StudentEdit extends Component {
    render() {
        return (
            <div>
                <CardHeader
                    title={
                        <div>
                            <TextField
                                required
                                id="firstNameS"
                                name="firstName"
                                label="First Name"
                                placeholder="Student First Name"
                                value={this.props.student.firstName}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => this.props.editPerson(event, this.props.student)}
                            />
                            <TextField
                                required
                                id="lastNameS"
                                name="lastName"
                                label="Last Name"
                                placeholder="Student Last Name"
                                value={this.props.student.lastName}
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={(event) => this.props.editPerson(event, this.props.student)}
                            />
                        </div>
                    }
                    subheader={<div><em>{this.props.student.role}</em> | <strong>{this.props.student.id}</strong></div>}
                />
                <CardContent>
                    <TextField
                        required
                        id="age"
                        name="age"
                        label="Age"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{ inputProps: { min: 1, max: 12 } }}
                        value={this.props.student.age}
                        variant="outlined"
                        onChange={(event) => this.props.editPerson(event, this.props.student)}
                    /> <br />
                    <TextField
                        required
                        id="grade"
                        name="grade"
                        label="Grade"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{ inputProps: { min: 0, max: 5 } }}
                        value={this.props.student.grade}
                        variant="outlined"
                        onChange={(event) => this.props.editPerson(event, this.props.student)}
                    /> <br />
                    <TextField
                        required
                        id="class"
                        name="class"
                        label="Class"
                        placeholder="Class 201"
                        value={this.props.student.class}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => this.props.editPerson(event, this.props.student)}
                    /> <br />
                    <InputLabel shrink id="enrollingLabel">
                        Enrolled
                </InputLabel> <br />
                    <Select
                        required
                        labelId="enrollingLabel"
                        id="enrollingChoice"
                        name="isEnrolled"
                        value={this.props.student.isEnrolled}
                        onChange={(event) => this.props.editPerson(event, this.props.student)}
                        displayEmpty
                    >
                        <MenuItem value={false}>Not Enrolled</MenuItem>
                        <MenuItem value={true}>Enrolled</MenuItem>
                    </Select>
                </CardContent>

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
                            onClick={() => this.props.toggleEditing(this.props.student)}
                        >
                            Save
                        </Button>
                    </CardActions>
                </Grid>
            </div>
        )
    }
}