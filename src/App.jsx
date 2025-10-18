import React, { useEffect } from "react";
import { useLocalStorage } from "./hooks/uselocalstorage";
import { ThemeProvider } from "./context/themecontext";
import Header from "./components/header";
import Home from "./components/home";
import Watchlist from "./components/watchlist";
import { useDispatch, useSelector } from "react-redux";
import { setWatchlist } from "./redux/movieslice";
import { Routes, Route } from "react-router-dom";
import "./App.css";


function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [watchlist, setWatchlistLS] = useLocalStorage("watchlist", []);
  useEffect(() => { document.body.className = theme === "dark" ? "theme-dark" : "theme-light"; }, [theme]);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(setWatchlist(watchlist)); }, []);
  const currentList = useSelector(s => s.watchlist);
  useEffect(() => { setWatchlistLS(currentList); }, [currentList]);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </ThemeProvider>
);
}

export default App;
