import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '../ListItem/ListItem';
const styles = {
    globalContainer: {
    }
};

const List = ({classes, topics}) => {


    return (
        <div className={classes.globalContainer}>
        {
            topics.map(topic => {
                return (
                    <ListItem
                        key={topic.id}
                        data={topic}
                    />
                )
            })
        }
        </div>
    );
};

export default withStyles(styles)(List);

