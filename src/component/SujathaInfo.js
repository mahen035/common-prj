import React from 'react';
import './SujathaInfo.css';
import Sujatha_indukuri from '../images/Sujatha_Indukuri.jpeg';
function SujathaInfo(props) {
    return (
        <div id="SujathaProfileContainer">
            <h1>SujathaIndukuri</h1>
            <img src={Sujatha_indukuri} width={300} height={300} align='center'/>
            <h1>Technical Skills:</h1>
        
              <h2>  Java</h2>
                <h2>JavaScript</h2>
                <h2>SQL,ORACLE</h2>
                <h2>PeopleSoft</h2>
                <h2>Selenium</h2>
        
        </div>
    );
}

export default SujathaInfo;
