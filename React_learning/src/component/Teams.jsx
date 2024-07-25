import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FavoritesContext } from './Fav';

const Teams = () => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);
    const [users, setUsers] = useState([]);
    const [micStates, setMicStates] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(response => {
                setUsers(response.data);
                setMicStates(response.data.reduce((acc, user) => {
                    acc[user.name] = false;
                    return acc;
                }, {}));
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const toggleMic = (userName) => {
        setMicStates(prevState => ({
            ...prevState,
            [userName]: !prevState[userName]
        }));
    };

    return (
        <div className="Meet">
            {users.map(user => (
                <div className="container" key={user.name}>
                    <div className='sound'>
                        <div onClick={() => toggleFavorite(user.name)}>
                            <FontAwesomeIcon icon={favorites[user.name] ? faStarSolid : faStarRegular} />
                        </div>
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
