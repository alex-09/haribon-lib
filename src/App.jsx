/* eslint-disable no-unused-vars */
import {useState} from "react";
import {ColorSchemeProvider, useMantineColorScheme, MantineProvider, Header } from "@mantine/core";
import "./App.css";
import LandingPage from "./layouts/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./layouts/frames/Errorpage"
import Home from "./layouts/Patron/Home";
import Appointment from "./layouts/Patron/Appointment";
import Resources from "./layouts/Patron/Resources";
import TransactionRecord from "./layouts/Patron/TransactionRecord";
import Admin from "./layouts/Patron/Routes/Admin";


function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (ColorScheme) =>
    setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <Router>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <Routes>
      <Route path={"/"} element={<LandingPage />} />
      <Route path={"*"} element={<ErrorPage/>}/>
      <Route path= {"Home"} element={<Home/>} />
      <Route path= {"Appointment"} element = {<Appointment/>}/>
      <Route path={"Resources"} element = {<Resources/>}/>
      <Route path={"TransactionRecord"} element = {<TransactionRecord/>}/>
      <Route path={"Admin"} element = {<Admin/>}/>
   
      </Routes>
    </MantineProvider>
    </ColorSchemeProvider>  
    </Router>
  );
}

export default App;