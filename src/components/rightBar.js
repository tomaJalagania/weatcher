import React from 'react'
import Cloud from '../img/cloud.svg'
import Clear from '../img/sun.svg'
function RinghtBar(props) {
    let img = ""
    let city = "";
    let celsy = "";
    let desc = ""
    let failure = false;
    console.log(props.data)
    if(props.data &&  props.data.cod !=404) {
        //console.log(`${props.data.weather[0].icon} left`)
        img = <img src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`} alt="mze" width="100" height="100" />
        city = props.data.name;
        celsy = props.data.main.temp;
        desc = props.data.weather[0].main
        failure = true
    }
    return  (
    <div className="rightBar">
    {failure ? (
        <div>
        <div>{img}</div>
        <div className="info" >
            <h1 className="city">{city}</h1>
            <h2 className="skay-info">{desc}</h2>
            <h2 className="clesie">{(celsy - 273.15).toFixed(2)} &#8451;</h2>
        </div>
        </div>
    ):(
        <h1>City Not Found</h1>
    )}
    
    </div>
    )
}
export default RinghtBar;