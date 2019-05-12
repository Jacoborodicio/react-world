import React from 'react';
import { withStyles, Link } from '@material-ui/core';
import { colors } from "../../constants/variables/variables";
const styles = {
  globalContainer: {
    margin: "2rem",
    borderRadius: ".3rem",
    cursor: "pointer",
    backgroundColor: "#eee",
    boxShadow: "0px 1px 1px rgba(0,0,0,0.2)",
    padding: "2rem",
    "& .title": {
      color: colors.darkPurple
    },
    "& .link": {
      textDecoration: "none"
    },
    "&:hover": {
      textDecoration: "none",
      backgroundColor: "#bbb",
      boxShadow: "0 0 3px rgba(0,0,0,.4)"
    }
  }
};
const ListItem = ({data, classes}) => {
    return (
        <div className={classes.globalContainer}>
            <Link href={data.link} className='link'>
                <h2 className="title">{data.title}</h2>
                <p>{data.resume}</p>
            </Link>
        </div>
    )
};

export default withStyles(styles)(ListItem);
