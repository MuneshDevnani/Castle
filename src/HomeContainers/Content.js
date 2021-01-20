import React from 'react'
import "./Content.css";
import { Button, makeStyles } from '@material-ui/core'
import Location from '@material-ui/icons/Room'
import Contact from '@material-ui/icons/ContactPhone'
import Visit from '@material-ui/icons/Schedule'
import Website from '@material-ui/icons/Language'

import img1 from '../images/01.jpg'
import img2 from '../images/02.jpg'
import img3 from '../images/03.jpg'
import img4 from '../images/04.jpg'
import map from '../images/map.jpg'
import Star from './HeaderBottom/Star';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}))

export default function Content() {
    const classes = useStyles()
    return (
        <div className="content">
            <div className="hero">
                <div class="hero-image">
                    <div class="hero-text">
                        <ul>
                            <li>
                                <a href="#">Overview</a>
                            </li>
                            <li>
                                <a href="#">Photos</a>
                            </li>
                            <li>
                                <a href="#">Reviews</a>
                            </li>
                            <li>
                                <a href="#">Suggested</a>
                            </li>
                        </ul>
                        <h1>Neuschwanstein castle</h1>
                        <div className="overview">
                            <p className="p1">Overview</p>
                            <hr />
                            <span className="star">
                        <Star />
                        </span>
                        <p>98%</p>
                        <p>27 reviews</p>
                        <p>$$$$</p>
                        <p>+1000 Photos</p>
                        </div>
                        <div>
                            <p className="p2">Photos</p>
                            <hr />
                        </div>
                        <div className="photos">
                            <img src={img1} className="img1" alt="picHere" />
                            <img src={img2} className="img2" alt="picHere" />
                            <img src={img3} className="img3" alt="picHere" />
                            <div className="img4">
                                <h1>+ 97 more</h1>
                            {/* <img src={img4} className="img4" alt="picHere" /> */}
                            </div>
                        </div>
                        <div className="text">
                            <p>
                                One of the must-see sights when you are visiting Munich and Bavaria in Germany is the fairy-tale castle of
                                Neuschwanstein.Built by Mad King Ludwig in the late 19th century, it’s the basis for Walt Disney’s Sleeping
                                Beauty Castle. Located a couple of hours away from Munich, the majority of visitors pay for a day tour,
                                sometimes also visiting a second castle. However, if you’re only interested in visiting Neuschwanstein Castle
                                and don’t need a guide to direct you on your way, it’s very easy to organise your own day trip to Neuschwanstein Castle.
                                                    </p>
                        </div>
                        <div>
                        <hr />
                            <div className="contact">
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    paddingTop:'50px'
                                }}>
                                    <Location />
                                    <h5>&nbsp; Location</h5>
                                </div>

                                <p><a>Neuschwansteinstraße 20, 87645 Schwangau, Germany</a></p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    paddingTop:'30px'
                                }}>
                                    <Contact />
                                    <h5>&nbsp; Contact</h5>
                                </div>
                                <p><a>+49 8362 939880</a></p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    paddingTop:'30px'
                                }}>
                                    <Visit />
                                    <h5>&nbsp; Visiting Hours</h5>
                                </div>

                                <p> Open &nbsp; <a>Closes 6 pm</a></p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    paddingTop:'30px'
                                }}>
                                    <Website />
                                    <h5>&nbsp; Website</h5>
                                </div>

                                <p><a>neuschwansteincastle.net</a></p>
                            </div>
                            <div className="map">
                                <img src={map} alt="map" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}