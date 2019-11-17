import React from 'react'

function LeftBar(props) {
    return <div className="leftBar">
                <div className="aweather">
                    <h1>aweather</h1>
                    <h1> forecast</h1>
                </div>
            
                <p className="baner">დაგეგმე დღე ამინდის მიხედვით</p>
                <input type="text" placeholder="Kutaisi" className='search_city' id="city" />
                <button onClick={props.onSearcCity} className="btn">აირჩიე ქალაქი</button>
                <p className="copyrait">www.tserv.ge</p>
           </div>;
    
}
export default LeftBar;