import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptainProfile = (updateData) => {
        setCaptain(CaptainData);
    };

    const value = {
        captain,
        setCaptain,
        loading,
        setLoading,
        error,
        setError,
        updateCaptainProfile
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext

