import React from 'react'

function Info(props) {
    return (
        <div className="info">
        <h1 className="city">{city}</h1>
        <h2 className="skay-info">{desc}</h2>
        <h2 className="clesie">{(celsy - 273.15).toFixed(2)} &#8451;</h2>
        </div>
    )
}

export default Info