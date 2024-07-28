// App.js
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import { selectThemeMode } from "./theme/themeSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Portofolio from "./pages/Portofolio";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import Resume from "./pages/Resume";
import More from "./pages/More";
import SplashScreen from "./SplashScreen";
import "./SplashScreen.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const themeMode = useSelector(selectThemeMode);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust this to however long you want the splash screen to show

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={() => theme(themeMode)}>
      <CssBaseline />
      {isLoading ? (
        <SplashScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/portofolio">
                <Route index element={<Portofolio />} />
                <Route path="more" element={<More />} />
              </Route>
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/github" element={<Github />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;
