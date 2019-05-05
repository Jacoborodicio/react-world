import React, {Component} from 'react';
import {HocDemo} from '../../components/HOC/HocDemo';
import {Route, NavLink} from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import  Slider  from "../../components/Slider/Slider";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const style = {
    fixedAdvancedPanel: {
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        padding: 20,
        borderRadius: 8,
        
        '& .link': {
            textDecoration: 'none',
            margin: 5,
            backgroundColor: 'white',
            border: '1px solid #bbb',
            borderRadius: 5,
            padding: 10,
            '&:hover': {
                backgroundColor: 'black',
                color: 'white'
            }
        },
        '& .active': {
            textDecoration: 'none',
            margin: 5,
            backgroundColor: 'yellow',
            border: '1px solid #bbb',
            borderRadius: 5,
            padding: 10,
        },
    },
    dinamicAdvancedPanel: {
        marginTop: 20
    },
    active: {
        backgroundColor: 'blue  '
    }
}

class Advanced extends Component {
    render() {
        const {classes} = this.props;
        return (
            <>
            <div className={classes.fixedAdvancedPanel} > 
            <h1>SPA</h1>
            <NavLink to={'/advanced/HOC'} className={'link'} activeClassName='active' >
            To HOC
            </NavLink>
            <NavLink to={'/advanced/slider'} className={'link'} activeClassName="active" >
            Slider
            </NavLink>
            </div>
            <div className={classes.dinamicAdvancedPanel} >
            <Route path="/advanced/HOC" component={HocDemo} />
            <Route path="/advanced/slider" component={Slider} />
            </div>
            </>
        );
    }
}

export default withStyles(style)(Advanced);