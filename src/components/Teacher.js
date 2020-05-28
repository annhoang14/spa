import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

export default class Teacher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            role: "Teacher",
            class: "",
            id: 0,
            //students: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitTeacher = (event) => {
        event.preventDefault();
        this.props.addTeacher(this.state);
        this.setState({
            name: "",
            role: "Teacher",
            id: 0,
            class: ""
        })
    }

    render() {
        return (
            <form>
                <TextField
                    required
                    id="nameT"
                    name="name"
                    label="Name"
                    placeholder="Name"
                    value={this.state.name}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => this.handleChange(event)}
                />
                <TextField
                    required
                    id="class"
                    name="class"
                    label="Class"
                    placeholder="Choose class"
                    value={this.state.class}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => this.handleChange(event)}
                />
                <TextField
                    required
                    id="idT"
                    name="id"
                    label="Class ID"
                    placeholder="Class ID"
                    value={this.state.id}
                    variant="outlined"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{ inputProps: { min: 0 } }}
                    onChange={(event) => this.handleChange(event)}
                />
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={(event) => this.submitTeacher(event)}
                    >+ Add Class
                    </Button>
                </div>
            </form>
        )
    }

}
