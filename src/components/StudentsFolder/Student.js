import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';


export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            id: 0,
            age: 0,
            grade: 0,
            class: "",
            isEnrolled: false,
            role: "Student",
            isEditing: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitStudent = (event) => {
        event.preventDefault();
        this.props.addStudent(this.state);
        this.setState({
            firstName: "",
            lastName: "",
            id: 0,
            age: 0,
            grade: 0,
            class: "",
            isEnrolled: false,
            role: "Student",
            isEditing: false,
        })
    }

    render() {
        return (
            <form>
                <TextField
                    required
                    id="firstNameS"
                    name="firstName"
                    label="First Name"
                    placeholder="Student First Name"
                    value={this.state.firstName}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => this.handleChange(event)}
                />
                <TextField
                    required
                    id="lastNameS"
                    name="lastName"
                    label="Last Name"
                    placeholder="Student Last Name"
                    value={this.state.lastName}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => this.handleChange(event)}
                />
                <TextField
                    required
                    id="idS"
                    name="id"
                    label="ID"
                    placeholder="Student ID"
                    value={this.state.id}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => this.handleChange(event)}
                />
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
                    value={this.state.age}
                    variant="outlined"
                    onChange={(event) => this.handleChange(event)}
                />
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
                    value={this.state.grade}
                    variant="outlined"
                    onChange={(event) => this.handleChange(event)}
                />
                <TextField
                    required
                    id="class"
                    name="class"
                    label="Class"
                    placeholder="Class 201"
                    value={this.state.class}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => this.handleChange(event)}
                />
                <InputLabel shrink id="enrollingLabel">
                    Enrolled
                </InputLabel>
                <Select
                    required
                    labelId="enrollingLabel"
                    id="enrollingChoice"
                    name="isEnrolled"
                    value={this.state.isEnrolled}
                    onChange={(event) => this.handleChange(event)}
                    displayEmpty
                >
                    <MenuItem value={false}>Not Enrolled</MenuItem>
                    <MenuItem value={true}>Enrolled</MenuItem>
                </Select>

                <FormControl disabled>
                    <InputLabel htmlFor="component-disabled">Role</InputLabel>
                    <Input id="role" name="role" value="Student" />
                </FormControl>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(event) => this.submitStudent(event)}
                    >+ Add Student
                    </Button>
                </div>
            </form>
        )
    }
}