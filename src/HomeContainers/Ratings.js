import React from 'react'
import Star from './HeaderBottom/Star'
import './Rating.css'

export default function Ratings() {
    return (
        <div>
            <div className="rating1">
                <h2 className="rating-title">Public reviews by ratings</h2>
                <p className="rating-subtitle">1k people have reviwed Neuschwanstein Castle</p>
                <span className="rating"><b>95%</b></span>
                <div className="rating-star">
                <Star />
                </div>
                <span className="rating-progress">
                    <small>5 Star</small><p></p>
                    <small>4 Star</small><p></p>
                    <small>3 Star</small><p></p>
                    <small>2 Star</small><p></p>
                    <small>1 Star</small><p></p>
                </span>
            </div>
            <div className="rating2">
                <h2 className="rating-title">Friends reviews by ratings</h2>
                <p className="rating-subtitle">65 of your friends reviwed Neuschwanstein Castle</p>
                <span className="rating"><b>65</b></span>
                <span className="rating-progress">
                    <small>5 Star</small><p className="p1"></p>
                    <small>4 Star</small><p className="p2"></p>
                    <small>3 Star</small><p className="p3"></p>
                    <small>2 Star</small><p className="p4"></p>
                    <small>1 Star</small><p className="p5"></p>
                </span>
            </div>

        </div>
    )
}
