import React, { createContext, useState, useEffect } from 'react';

export const FavoritesContext = createContext();

const Fav = ({ children }) => {
    const [favorites, setFavorites] = useState({});

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const toggleFavorite = (userName) => {
        setFavorites(prevState => {
            const newState = {
                ...prevState,
                [userName]: !prevState[userName]
            };
            localStorage.setItem('favorites', JSON.stringify(newState));
            return newState;
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default Fav;
