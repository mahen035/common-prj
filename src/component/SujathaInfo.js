import React from 'react';
import Sujatha_indukuri from './Sujatha_indukuri.jpeg';
function SujathaInfo(props) {
    return (
        <div style={{backgroundColor:'blue', width:500 }}>
            <h1>SujathaIndukuri</h1>
            <img src={Sujatha_indukuri} width={100} height={100} />
            <h2>Technical Skills:</h2>
        
              <h5>  Java</h5>
                <h5>JavaScript</h5>
                <h5>SQL,ORACLE</h5>
                <h5>PeopleSoft</h5>
                <h5>Selenium</h5>
        
        </div>
    );
}

export default SujathaInfo;