import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const loginUser = (username, password) => {
        setUserData({ username });
    };

    return (
        <DataContext.Provider value={{ userData, loginUser }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);  // ✅ Custom hook
export default DataContext;