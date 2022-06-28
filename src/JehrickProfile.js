import React from 'react';
import './JehrickProfile.css';
import jehrickData from './ProfileData.json';

function JehrickProfile(props) {
    return (
        <div id="ProfileContainer">
            <header>
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
            <h2>Skills</h2>
            <ul>
                {jehrickData.skills.map((index,key) => {
                    return (
                        <li key={key}>
                            {index.skill}, {index.type}, {index.years} years
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
    );
}

export default JehrickProfile;