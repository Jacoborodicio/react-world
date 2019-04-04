import React, { Component } from 'react'
import List from '../../components/List/List';
import {topics} from '../../dummyData/Topics/Topics';
import { Grid, withStyles } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import { connect } from "react-redux";
import { getNews } from "../../redux/actions/global-actions";
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
  render() {
     
      const {classes} = this.props;
    return (
        <Grid container spacing={16}>
            <Grid item xs={12} className={classes.appBar}>
                <NavBar onChange={this.handleSearch}/>
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
    return items;
}
const mapDispatchToProps = {
    getNews
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Home));
