import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <AppContext.Provider value={{ sidebar, modal, toggleModal, toggleSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
