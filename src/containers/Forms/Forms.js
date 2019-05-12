import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  globalContainer: {
    padding: 10
  },
  formContainer: {
      padding: 10,
      backgroundColor: '#ddd',
      borderRadius: 10
  }
};

class Forms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            secondName: '',
            age: null,
            email: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("State on send: ", this.state)
    }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.globalContainer}>
        <div className={classes.formContainer}>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={'name'}>
                    Name
                </label>
                <input 
                    type='text' 
                    name='name'
                    required
                    onBlur={this.handleInput}
                    />
                <label htmlFor={'secondName'}>
                    Second Name
                </label>
                <input 
                    type='text' 
                    name='secondName'
                    required
                    onBlur={this.handleInput}
                    />
                <label htmlFor={'age'}>
                    Age
                </label>
                <input 
                    type='number' 
                    name='age'
                    required
                    onBlur={this.handleInput}
                    />
                <label htmlFor={'email'}>
                    Email
                </label>
                <input 
                    type='email' 
                    name='email'
                    required
                    onBlur={this.handleInput}
                    />
                <button type='submit'>
                    Send
                </button>
            </form>
        </div>
      </div>
    );
  }
}
Forms.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Forms);
