 import Head from "next/head";
import Home from '@/components/header'
import Countdown from "@/components/countdown";
import Note from "@/components/note";
import Map from "@/components/map";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { useState, createContext } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function OnePage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="OnePage" id={theme}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, intial-scale=1.0" />
          <title>Imomotimi Ijaw Dance Event </title>
        </Head>
        <div className="switch">
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        <Home theme={theme} />
        <Countdown theme={theme} />
        <Note />
        <Map />
        <Contact theme={theme} /> 
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default OnePage;