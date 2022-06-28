import React from 'react';
import mars from './mars.jpg';
function MarsInfo(props) {
    return (
        <div style={{width:600 , height:800}}>
          <h1>Mars Returnship Program</h1>  
          <img src={mars} width={500} height={500} />
             </div>

    );
}

export default MarsInfo;