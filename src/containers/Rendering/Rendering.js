import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar';
import { withStyles } from '@material-ui/core';
import  {ShowItem}  from "./auxiliarComponents/ShowItem";
import { IsolatedComponent } from "./auxiliarComponents/isolatedComponent";
const styles = {
  firstExample: {
    backgroundColor: '#ddd',
    '& .input': {
      margin: '1rem',
    }
  },
  mainContainer: {
    backgroundColor: '#FFF',
    border: '1px solid #BBB',
  }
}

class Rendering extends Component {
  state = {
    firstText: 'First Text',
    secondText: 'Second Text',
    thirdText: null,
    name: 'Jacobo',
    items: ['Hola', 'que', 'tal', 'estás', '?']
  }
  handleInput = event => {
    const name = event.target.value;
    this.setState({
      name
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
        <p>It contains some parts from the state:</p>
        <ShowItem items={this.state.items} classes={classes} />
      </div>
      <IsolatedComponent />
      </div>

      </>
    )
  }
};

export default withStyles(styles)(Rendering);