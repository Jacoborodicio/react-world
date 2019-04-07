import React from 'react';


const showItem = props => {
    const {classes, children, items} = props;
    return (
        <div className={classes.mainContainer}>
            {
                items.map(item => <p>Name: {item}</p>)
            }
            {children}
        </div>
    );
};

export const ShowItem = React.memo(showItem);