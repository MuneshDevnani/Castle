import React from 'react'
import './Sidebar.css'
function Index() {
    return (
        <div className="nav-side-menu col-lg-3 col-md-2">
            <div className="brand">Filters</div>
            <div className="filter-div">
            <p className="filter">$</p>
            <p className="filter">$$</p>
            <p className="filter selected">$$$</p>
            <p className="filter">$$$$</p>
            </div>
            <div class="devider">
                      </div>
            <i className="fa fa-bars fa-2x toggle-btn" data-toggle="collapse" data-target="#menu-content" />
            <div className="menu-list">
                <ul id="menu-content" className="menu-content collapse out">
                    
                    <li data-toggle="collapse" data-target="#products" className="collapsed active">
                        <a href="#"> Select City <span className="arrow" /></a>
                    </li>
                    <ul className="sub-menu collapse" id="products">
                        <li><a href="#">Berlin</a></li>
                        <li><a href="#">Munich</a></li>
                        <li><a href="#">Hamburg</a></li>
                        <li><a href="#">FrankFurt</a></li>
                        <li><a href="#">Dresden</a></li>
                        <li><a href="#">Dortmund</a></li>
                        <li><a href="#">Hamburg</a></li>
                        <li><a href="#">Augsburg</a></li>
                    </ul>
                    <div class="devider">
                      </div>
                    <li >
                        <a href="#"> Brows Category</a>
                    </li>
                      <ul>
                        <li><a href="#">All</a></li>
                        <li><a href="#">Hotels</a></li>
                        <li><a href="#">Sightseehing</a></li>
                        <li><a href="#">Parks</a></li>
                        <li><a href="#">Mountains</a></li>
                        <li><a href="#">Rivers</a></li>
                        <li><a href="#">Beaches</a></li>
                        <li><a href="#">Bars</a></li>
                        <li><a href="#">Hospitals</a></li>
                      </ul>
                </ul>
            </div>
        </div>

    )
}

export default Index
