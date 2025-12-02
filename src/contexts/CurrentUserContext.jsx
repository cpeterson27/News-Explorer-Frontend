import React, { useState } from "react";

const CurrentUserContext = React.createContext();

const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <CurrentUserContext.Provider
        value={{
            currentUser,
            setCurrentUser,
            isLoggedIn,
            setIsLoggedIn
        }}
        >
            {children}
        </CurrentUserContext.Provider>
    );
};

export default CurrentUserContext;
export { CurrentUserProvider };