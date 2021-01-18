import React from 'react'
import './Reviews.css'
import man from '../images/man.jpg'
import Star from './HeaderBottom/Star'

export default function Photos() {
    return (
        <div>
             <div className="reviews">
                    <p className="p1">Reviews</p>
                            <hr />
                        <p className="p2">Circle Sort</p>
                        <div className="reviews-person">
                        <div className="review1">
                        <img src={man} alt="Avatar" />
                        <p className="name">Murrey</p>
                        <div className="review-star">
                        <Star />
                        </div>
                        <p className="title">Highest Rating</p>
                        <button>Lowest Rating</button>
                        <h3 className="review-title">Great Place To Visit !</h3>
                        <p className="review-desc">I went on a rainy day and did not tour the castle, I only did the trails around it. 
                            It was fantastic and well worth it even with the rain. I look forward to going back 
                            again and will do the tour next time, possibly in the fall when the leaves are changing.
                            The forest around the castle is fantastic and there were still a lot of wildflowers in
                            bloom. The waterfalls were a highlight!</p>
                        </div>
                        <div className="review2">
                        <img src={man} alt="Avatar" />
                        <p className="name">Sandy</p>
                        <div className="review-star2">
                        <Star />
                        </div>
                        <p className="title">Published <b>Nov 10, 2020</b></p>
                        <h3 className="review-title">Great Place To Visit !</h3>
                        <p className="review-desc">I went on a rainy day and did not tour the castle, I only did the trails around it. 
                            It was fantastic and well worth it even with the rain. I look forward to going back 
                            again and will do the tour next time, possibly in the fall when the leaves are changing.
                            The forest around the castle is fantastic and there were still a lot of wildflowers in
                            bloom. The waterfalls were a highlight!</p>
                        </div>

                        </div>
                        </div>
        </div>
    )
}
