"use client"; // This is a client component 👈🏽

import { createContext, useState ,useContext} from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState([]);

  return (
    <AppContext.Provider value={{ fetchData, setFetchData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext)