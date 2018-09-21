import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

const Card = ({photo}) => {
    const {id, photo_url} = photo;
    return (
        <div id={`card-${id}`} className={styles.card}>
            <img src={photo_url} />
            <p></p>
        </div>
    )
}

Card.propTypes = {
    photo: PropTypes.object.isRequired
}

export default Card;