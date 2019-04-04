import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';
import { withStyles } from '@material-ui/core';


const styles = {
  firstExample: {
    backgroundColor: '#ddd',
    '& .input': {
      margin: '1rem',
    }
  }
}

class Rendering extends Component {
  state = {
    firstText: null,
    secondText: null,
    thirdText: null,
    name: 'Jacobo'
  }
  handleInput = event => {
    const firstText = event.target.value;
    this.setState({
      firstText
    })
  }
  render() {
    const {classes} = this.props;
    return (
      <>
      <NavBar title='Analyzing the render cases' />
      <div className={classes.firstExample}>
        <h3>Example of total render</h3>
        <p>The content on this block contents the whole logic in the same component</p>
        <p>We can see how the render fires the whole block</p>
        <input 
          className='input'
          type='text'
          onChange={this.handleInput}
        />
      <div>
        <h4>Example of other part which shouldn't be rendered</h4>
        <p>Only when it contains some parts from the state, e.g. name: {this.state.firstText}</p>
      </div>
      </div>

      </>
    )
  }
};

export default withStyles(styles)(Rendering);