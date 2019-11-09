import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import styles from "../utils/styles/Carousel.css"

import logo from "./images/prestige2-2.jpg"
import family from "./images/bell-family.jpg"
import crew from "./images/prestige-crew.jpg"
import crew2 from "./images/crew2.jpg"






function carousel() {

    return (
        <div id="carousel">
            <img src={logo} alt="..." height={50} width={80} id="prestige" />
            <Carousel>
                <img src={family} alt="..." style={styles} id="image" />
                <img src={crew} alt="..." style={styles} id="image" />
                <img src={crew2} alt="..." style={styles} id="image" />
            </Carousel>
        </div >
    )
}


export default carousel
