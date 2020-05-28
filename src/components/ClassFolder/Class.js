import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


export default class Class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "",
            teacher: "",
            id: 0,
            isEditing: false,
            //students: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    submitClass = (event) => {
        event.preventDefault();
        this.props.addClass(this.state);
        this.setState({
            subject: "",
            teacher: "",
            id: 0,
            isEditing: false,
        })
    }

    render() {
        return (
            <form>
                <TextField
                    required
                    id="subject"
                    name="subject"
                    label="Subject"
                    placeholder="Subject"
                    value={this.state.subject}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => this.handleChange(event)}
                />
                <TextField
                    required
                    id="teacher"
                    name="teacher"
                    label="Teacher"
                    placeholder="Choose teacher"
                    value={this.state.teacher}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(event) => this.handleChange(event)}
                />
                <TextField
                    required
                    id="idC"
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
                        onClick={(event) => this.submitClass(event)}
                    >+ Add Class
                    </Button>
                </div>
            </form>
        )
    }
}
