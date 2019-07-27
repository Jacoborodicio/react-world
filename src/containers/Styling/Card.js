import React from 'react';

const Card = props => {
    return (
        <div style={{
            backgroundColor: props.backgroundcolor ? props.backgroundcolor : 'black',
            height: props.height ? props.height + 'vh' : 10 + 'vh',
            width: props.width ? props.width + 'vw' : 100 + 'vw',
            color: props.color ? props.color : 'black'
            }}>
            Example of a card
        </div>
    )

};
export default Card;