import React, {Component} from 'react';
import {HocDemo} from '../../components/HOC/HocDemo';
import {Route, Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Home from '../Home/Home';


const style = {
    fixedAdvancedPanel: {
        backgroundColor: '#ccc',
        padding: 20,
        borderRadius: 8,
        '& .link': {
            textDecoration: 'none',
            margin: 10,
            border: '1px solid #eee',
            padding: 5
        }
    },
    dinamicAdvancedPanel: {
        marginTop: 20
    }
}

class Advanced extends Component {
    render() {
        const {classes} = this.props;
        return (
            <>
            <div className={classes.fixedAdvancedPanel} > 
            <h1>SPA</h1>
            <Link to={'/advanced/HOC'} className={'link'}>
                To hoc
            </Link>
            <Link to={'/advanced/second'} className={'link'}>
                To second
            </Link>
            </div>
            <div className={classes.dinamicAdvancedPanel} >
            <Route path="/advanced/HOC" component={HocDemo} />
            <Route path="/advanced/second" component={Home} />
            </div>
            </>
        );
    }
}

export default withStyles(style)(Advanced);