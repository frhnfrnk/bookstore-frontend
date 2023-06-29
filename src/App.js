import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./page/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./page/Cart";
import DefaultLayout from "./layout/DefaultLayout";
import LoginPage from "./page/LoginPage";
import { SwitchThemeProvider } from "./context/SwitchTheme";
import { StoreProvider } from "./context/StoreContext";
import SignupPage from "./page/Signup";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <SwitchThemeProvider>
        <StoreProvider>
          <Routes>
            <Route path="*" name="Home" element={<DefaultLayout />} />
            <Route
              exact
              path="/"
              name="Landing Page"
              element={<LandingPage />}
            />
            <Route
              exact
              path="/login"
              name="Login Page"
              element={<LoginPage />}
            />
            <Route
              exact
              path="/signup"
              name="Signup Page"
              element={<SignupPage />}
            />
          </Routes>
        </StoreProvider>
      </SwitchThemeProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
