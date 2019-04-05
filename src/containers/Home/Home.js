import React, { Component } from 'react'
import List from '../../components/List/List';
import {topics} from '../../dummyData/Topics/Topics';
import { Grid, withStyles } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import { connect } from "react-redux";
import { getNews } from "../../redux/actions/global-actions";
import { changeName } from "../../redux/actions/forms-actions";
import { handleFirstNumberChange } from "../../redux/actions/firstNumber-action";
import { handleSecondNumberChange } from "../../redux/actions/secondNumber-actions";
const styles = {
    appBar: {
        width: '100%',
    },
    mainView: {
    }
}

class Home extends Component {
    state = {
        topics: topics
    }
    componentDidMount() {
        this.props.getNews();
    }
    handleSearch = event => {
        const term = event.target.value;

        const newTopics = topics.filter(topic => topic.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
        this.setState({
            topics: newTopics
        })

    }
    changeName = name => {
        this.props.changeName({name})
    }
    changeFirstNumber = number => {
        this.props.handleFirstNumberChange({number});
    }
    changeSecondNumber = number => {
        this.props.handleSecondNumberChange({number});
    }
  render() {
     
      const {classes} = this.props;
    return (
        <Grid container spacing={16}>
            <Grid item xs={12} className={classes.appBar}>
                <NavBar onChange={this.handleSearch}/>
            </Grid>
            <Grid item xs={12}>
                <input type='text' onChange={(e) => this.changeName(e.target.value)} />
                <input type='number' onChange={(e) => this.changeFirstNumber(e.target.value)} />
                <input type='number' onChange={(e) => this.changeSecondNumber(e.target.value)} />
            </Grid>
            {/* <Grid item xs={3} className={classes.sideBar}>
                Here may be frecuent topics
            </Grid> */}
            <Grid item xs={12} className={classes.mainView}>
                <List 
                topics={this.state.topics}
                />
            </Grid>

        </Grid>
    )
  
}
};

const mapStateToProps = state => {
    console.log("State desde props: ",state)
    const {items} = state;
    return {items};
}
const mapDispatchToProps = {
    getNews,
    changeName,
    handleFirstNumberChange,
    handleSecondNumberChange
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Home));
