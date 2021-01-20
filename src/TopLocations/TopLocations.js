import { Slide } from '@material-ui/core'
import React from 'react'
import Header from './Header/Index'
import Sidebar from './Sidebar/Index'
import Content from './Content/Index'
function TopLocations() {
    return (
        <div>
            <Header />
            <Sidebar />
            <Content />
        </div>
    )
}

export default TopLocations
