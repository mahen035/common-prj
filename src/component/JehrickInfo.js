import React, { useState } from 'react';
import './JehrickInfo.css';
import jehrickData from './JehrickInfoData.json';
import profileImage from '../images/Jehrick_Robertson.png';

function JehrickProfile(props) {
    const state = useState(jehrickData)
    return (
        <div id="JehrickProfileContainer">
            <header id="JehrickProfileHeader">
                <h1>
                    {jehrickData.firstName} {jehrickData.lastName}
                </h1>
                <h3>
                    {jehrickData.city}, {jehrickData.state}
                </h3>
                <h3>
                    {jehrickData.school}
                </h3>
                <h4>
                    {jehrickData.degree}, class of {jehrickData.graduationYear}
                </h4>
            </header>
            <div id="JehrickProfileImageContainer">
                <img id="JehrickProfileImage" src={profileImage}/>
            </div>
            <div id="JehrickProfileDetailsContainer">
            <h2>Skills</h2>
            <ul>
                {jehrickData.skills.map((index,key) => {
                    return (
                        <li key={key}>
                            <b>{index.skill}</b>, {index.type}, {(() => {
                                let [months, years] = [index.months, Math.floor(index.months / 12)];
                                if (months < 12) {
                                    if (months === 1) {
                                        return `${months} month`
                                    } else {
                                        return `${months} months`
                                    }
                                }
                                else {
                                    if (years === 1) {
                                        return `${years} year`
                                    } else {
                                        return `${years} years`
                                    }
                                }
                            })()}
                        </li>
                    )
                })}
            </ul>
            <h2>Interests</h2>
            <ul>
                {jehrickData.interests.map((interest,key) => {
                    return (
                        <li key={key}>
                            {interest}
                        </li>
                    )
                })}
            </ul>
            </div>
            <div id="JehrickProfileAboutMeContainer">
                <h2>About Me</h2>
                <p>
                    {jehrickData.about_me}
                </p>
            </div>
        </div>
    );
}

export default JehrickProfile;
