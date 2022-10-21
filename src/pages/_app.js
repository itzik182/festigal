import React from "react";
// import Navbar from "components/Navbar";
// import Footer from "components/Footer";
import "util/analytics";
import "../styles/globals.css";
import "../styles/fonts.css";
import { ThemeProvider } from "util/theme";
// import Box from '@material-ui/core/Box';
// import YoutubeEmbed from '../components/YoutubeEmbed';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        <Component {...pageProps} />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
