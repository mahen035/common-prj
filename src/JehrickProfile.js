import React, { useState } from 'react';
import './JehrickProfile.css';
import jehrickData from './ProfileData.json';
import profileImage from './images/jehrick/pic-cropped-small.png';

function JehrickProfile(props) {
    const state = useState(jehrickData)
    return (
        <div id="ProfileContainer">
            <header id="ProfileHeader">
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
            <div id="ProfileImageContainer">
                <img id="ProfileImage" src={profileImage}/>
            </div>
            <div id="ProfileDetailsContainer">
            <h2>Skills</h2>
            <ul>
                {jehrickData.skills.map((index,key) => {
                    return (
                        <li key={key}>
                            {index.skill}, {index.type}, {(() => {
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
        </div>
    );
}

export default JehrickProfile;