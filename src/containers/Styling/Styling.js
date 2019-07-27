import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from './Card';

const styles = {
  controls: {
    margin: '2rem auto'
  }
};

class Styling extends Component {
  state = {
    height: 86,
    width: 98,
    color: 'black',
    backgroundcolor: '#F0F0F0',
    border: 'none'
  }
  render() {
    const {classes} = this.props;
    return (
      <div>
        Playing with the props and style of a concret component
        <div className={classes.controls}>
          Background Color:
          <input type='text' value={this.state.backgroundcolor} 
            onChange={event => this.setState({backgroundcolor: event.target.value})}
            style={{margin: '0 1rem'}}  
          />
          Height:
          <input type='number' value={this.state.height} 
            onChange={event => this.setState({height: event.target.value})}
            style={{margin: '0 1rem'}}  
          />
          Width:
          <input type='number' value={this.state.width} 
            onChange={event => this.setState({width: event.target.value})}
            style={{margin: '0 1rem'}}  
          />
          Color of the text:
          <input type='text' value={this.state.color} 
            onChange={event => this.setState({color: event.target.value})}
            style={{margin: '0 1rem'}}  
          />
        </div>
        <div>
          <Card
            backgroundcolor={this.state.backgroundcolor}
            color={this.state.color}
            width={this.state.width}
            height={this.state.height}
            border={this.state.border}
          />
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(Styling);