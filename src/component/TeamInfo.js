import React from 'react';
import SujathaInfo from './SujathaInfo';
import MarsInfo from './MarsInfo';
import VidhyaInfo from './VidhyaInfo';

import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';

function TeamInfo(props) {
    return (
        <div style={{backgroundColor:'pink'}}>
          
            <BrowserRouter>
            <nav className = 'NavBarItems' style={{backgroundColor:'black'}}>
                
                <ul>
                <li>
                    <Link to = '/MarsInfo'>Mars</Link>
                    </li>
                    <li>
                    <Link to = '/SujathaInfo'>Sujatha</Link>
                    </li>
                    <li>
                    <Link to = '/SujathaInfo'>Srigowri</Link>
                    </li>
                    <li>
                    <Link to = '/SujathaInfo'>Madhu</Link>
                    </li>
                    <li>
                    <Link to = '/SujathaInfo'>Eric</Link>
                    </li>
                    <li>
                    <Link to = '/SujathaInfo'>Jheric</Link>
                    </li>
                    <li>
                    <Link to = '/VidhyaInfo'>Vidhya</Link>
                    </li>
                </ul>
                
            </nav>
            <Routes>
                <Route path='/MarsInfo' element={<MarsInfo/>}/>
                <Route path='/SujathaInfo' element={<SujathaInfo/>}/>
                <Route path='/VidhyaInfo' element={<VidhyaInfo/>}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    );
}
export default TeamInfo;