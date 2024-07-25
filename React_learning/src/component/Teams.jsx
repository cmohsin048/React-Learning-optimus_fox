import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';

const users = [
    { name: 'Shawal Ali', avatar: 'https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=1024x1024&w=is&k=20&c=zvw6qDmYHmIvvCbEn2ZUF0tdSbKPnEWRsVAzd9g4hCM=' },
    { name: 'Muhammad Ahmed Hussain', avatar: '' },
    { name: 'Faiz Ul Hassan', avatar: 'https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Arisha Nawaz', avatar: '' },
    { name: 'Mariyem Ahmed', avatar: '' },
    { name: 'Iram Khizar', avatar: '' },
    { name: 'Ch Mohsin', avatar: '' }
];

const Teams = () => {
    // Initialize mic states with the user's name as the key
    const [micStates, setMicStates] = useState(users.reduce((acc, user) => {
        acc[user.name] = false; // Default mic state is off
        return acc;
    }, {}));

    const toggleMic = (userName) => {
        setMicStates(prevState => ({
            ...prevState,
            [userName]: !prevState[userName] // Toggle mic state for the specific user
        }));
    }

    return (
        <div className="Meet">
            {users.map(user => (
                <div className="container" key={user.name}>
                    <div className='sound'>
                        <div className='sound-icon' onClick={() => toggleMic(user.name)}>
                            <FontAwesomeIcon className='icon' icon={micStates[user.name] ? faMicrophone : faMicrophoneSlash} />
                        </div>
                    </div>
                    <div className='users-container'>
                        <div className='user-container'>
                            {user.avatar ? (
                                <img src={user.avatar} alt={user.name} className='avatar-img' />
                            ) : (
                                <div className='avatar-text'>
                                    {user.name.split(' ')[0][0]} {/* Display the first letter of the first name */}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='user-name'>
                        <p>{user.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Teams;
