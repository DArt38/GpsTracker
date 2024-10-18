import React, { createContext, useContext, useState } from 'react';

const GpsContext = createContext();

export const useGps = () => useContext(GpsContext);

export const GpsProvider = ({children}) => {
    const [coordinates, setCoordinates] = useState({lat: 0, lng: 0});

    return (
        <GpsContext.Provider value = {{coordinates, setCoordinates}}>
            {children}
        </GpsContext.Provider>
    );

};