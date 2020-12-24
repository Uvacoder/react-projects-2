import React, { useContext, useState } from "react";
import sublinks from "./Data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenusOpen, setIsSubmenusOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenus = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenusOpen(true);
  };
  const closeSubmenus = () => {
    setIsSubmenusOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        openSidebar,
        openSubmenus,
        closeSidebar,
        closeSubmenus,
        isSidebarOpen,
        isSubmenusOpen,
        page,
        location
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
