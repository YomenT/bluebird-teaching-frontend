import React from 'react'
import "./css/HomePage.css"

import Header from './Header'
import MainContent from './MainContent'
import Logo from './Logo'
import Footer from './Footer'
import LatestFocus from './LatestFocus'

class HomePage extends React.Component {
    render() {
        return (
            <div className="logoDiv">
                <Logo />
                <Header />
                <MainContent />
                <LatestFocus />
                <Footer />
            </div>
        )
    }
}

export default HomePage