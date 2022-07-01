import React from 'react';
import SujathaInfo from './SujathaInfo';
import JehrickInfo from './JehrickInfo';
import MarsInfo from './MarsInfo';

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
                    <Link to = '/JehrickInfo'>Jehrick</Link>
                    </li>
                    <li>
                    <Link to = '/SujathaInfo'>Vidhya</Link>
                    </li>
                </ul>
                
            </nav>
            <Routes>
                <Route path='/MarsInfo' element={<MarsInfo/>}/>
                <Route path='/SujathaInfo' element={<SujathaInfo/>}/>
                <Route path='/JehrickInfo' element={<JehrickInfo/>}/>
                
            </Routes>
            </BrowserRouter>
        </div>
    );
}
export default TeamInfo;
