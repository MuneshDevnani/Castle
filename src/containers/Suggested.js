import React from 'react'
import './Suggested.css'
import img1 from '../images/01.jpg'
import img2 from '../images/02.jpg'
import img3 from '../images/03.jpg'

export default function Suggested() {
    return (
        <div className="suggested">
            <p className="p">Suggested</p>
                            <hr />
            <div class="container">
                <div className="card-group">
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"> <small>+5 friends reccomended </small></p>
                            <p className="card-text"><small className="text-muted">Bensberg &nbsp;&nbsp; Castle &nbsp;&nbsp;&nbsp;&nbsp; $$$$</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><small>+3 friends reccomended</small> </p>
                            <p className="card-text"><small className="text-muted">Bensberg &nbsp;&nbsp; Castle &nbsp;&nbsp;&nbsp;&nbsp; $$$$</small></p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={img3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text"><small>+5 friends reccomended</small> </p>
                            <p className="card-text"><small className="text-muted">Bensberg &nbsp;&nbsp; Castle &nbsp;&nbsp;&nbsp;&nbsp; $$$$</small> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
