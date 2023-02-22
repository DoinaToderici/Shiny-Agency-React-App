import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home/home.jsx";
import Survey from "./pages/Survey/survey.jsx";
import HomeSurvey from "./pages/Survey/homeSurvey";
import Results from "./pages/Results/results.jsx";
import Freelances from "./pages/Freelances/freelances.jsx";
import Error from "./pages/Error/error.jsx";
import { ThemeContext } from "./Context/themeContext";
import "./App.css";
import { Connexion } from "./pages/Connexion/connexion";
import { Login } from "./pages/Connexion/login";
import { Registration } from "./pages/Connexion/registration";
import { UserContextProvider } from "./Context/userContext";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <BrowserRouter>
          <UserContextProvider>
            <Header />
            <div className={`app-container container p-5 ${theme}`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<HomeSurvey />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
                <Route path="/results" element={<Results />} />
                <Route path="/freelances" element={<Freelances />} />
                <Route path="/connexion" element={<Connexion />}>
                  <Route path="/connexion/login" element={<Login />} />
                  <Route
                    path="/connexion/registration"
                    element={<Registration />}
                  />
                </Route>
                <Route path="*" element={<Error />} />
              </Routes>
              <Footer />
            </div>
          </UserContextProvider>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
