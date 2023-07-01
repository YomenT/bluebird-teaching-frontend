import React from 'react'

import Logo from './Logo'
import Footer from './Footer'

class ChainsSeriesPdfPage extends React.Component {

    render() {
        return (
            <div>

                <Logo />
                <div className='bodyDiv'>
                    <h2 style={{ paddingBottom: "25px" }}><i>Chains Series - First Edition</i></h2>
                </div>

                <div className='aboutBodyDiv' style={{ paddingTop: "75px ", paddingBottom: "75px" }}>
                    <object data="https://www.docdroid.net/7AEi5WO/chains-series-first-edition-pdf" type="application/pdf" width="100%" height="1100px">
                        <p>Alternative text - Unable to load <a href="https://www.docdroid.net/7AEi5WO/chains-series-first-edition-pdf">to the PDF</a></p>
                    </object>  
                </div>
                <Footer />

            </div>
        )
    }
}

export default ChainsSeriesPdfPage