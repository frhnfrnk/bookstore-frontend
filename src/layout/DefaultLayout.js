import React, { createContext, useContext, useEffect } from "react";
import AppContent from "../component/Content/Content";
import Header from "../component/Header/header";
import Sidebar from "../component/Sidebar/sidebar";
import { FunctionProvider } from "../context/FunctionContext";
import "./DefaultLayout.css";

import {
  SwitchThemeProvider,
  SwitchThemeContext,
} from "../context/SwitchTheme";

const DefaultLayout = () => {
  const { theme, setTheme } = useContext(SwitchThemeContext);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if (!access_token) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <FunctionProvider>
      <div className={`layout ${theme}`}>
        <Sidebar />
        <div className={`wrapper ${theme}`}>
          <Header />
          <div className={`body ${theme}`}>
            <AppContent />
          </div>
        </div>
      </div>
    </FunctionProvider>
  );
};

export default DefaultLayout;
