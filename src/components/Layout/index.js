import React from 'react'
import { Footer } from './Footer'
import Navbar from './Navbar'

const index = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="container" style={{marginTop: '85px'}} >
                {children}
            </div>
            <Footer />

        </>
    )
}

export default index
