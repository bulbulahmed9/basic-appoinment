import React from 'react'
import spinner from './spinner.jpg'

function BigLoader() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img style={{ height: "190px", width: "250px", marginTop: "100px" }} src={spinner} alt="Loading..." />
        </div>
    )
}

export default BigLoader