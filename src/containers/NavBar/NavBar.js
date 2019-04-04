import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    navBar: {
        marginBottom: '1rem'
    },
    inputRoot: {
        position: 'absolute',
        right: 50,
        color: '#FFF'
    },
    inputInput: {
        backgroundColor: '#FFF',
        borderRadius: '.3rem',
        color: '#000',
        padding: '.5rem'
    }
};
  

class NavBar extends Component{
    shouldComponentUpdate(nextProps) {
        console.group("Rendering NavBar");
            console.log("Actual props: ", this.props)
            console.log("Next props: ", nextProps)
        console.groupEnd();
        if(nextProps.title !== this.props.title) {
            console.log("Entramos en son diferentes")
            return true;
        }
        return false;
    }
    render() {
        const {classes, onChange, title} = this.props;
        return (
            <AppBar position="static" className={classes.navBar}>
                <Toolbar >
                    <h1>{title}</h1>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onChange={onChange}
                />
                </Toolbar>
            </AppBar>
        );
    }
};

export default withStyles(styles)(NavBar);
