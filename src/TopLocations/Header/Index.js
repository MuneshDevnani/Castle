import React from 'react'
import "./Header.css";

function header() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <form className="form-inline">
                        <div className="input-group align-center search-area">
                            <input type="text" className="form-control search-box" placeholder="Search Your Desire" />
                            <div className="horizontal-devider"></div>
                            <input type="text" className="form-control search-box" placeholder="Near by Places" />
                        </div>
                    </form>
                    <div className="navbar-nav">
                        <div className="login">
                            <a href="#" className="nav-item nav-link a1">Login</a>
                        </div>
                        <div className="signup">
                            <a href="#" className="nav-item nav-link a2">Signup</a>
                        </div>
                    </div>
                </div>
            </nav>

           
        </div>
    )
}

export default header
