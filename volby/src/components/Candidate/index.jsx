import React from 'react';

export const Candidate = (props) => {
    const handleClick = () => {
        console.log('kliknuto - dítě');
        props.onVote(props.jmeno);
    };

    return (
        <button
            disabled={props.zahlasovano}
            onClick={handleClick}
        >{props.jmeno}</button>
    );
}