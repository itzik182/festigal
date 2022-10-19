import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "util/analytics";
import "../styles/globals.css";
import "../styles/fonts.css";
import { ThemeProvider } from "util/theme";
import Box from '@material-ui/core/Box';
import YoutubeEmbed from '../components/YoutubeEmbed';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <>
        

        <Component {...pageProps} />

        <Footer
          bgColor="light"
          size="normal"
          bgImage=""
          bgImageOpacity={1}
          description="A short description of what you do here"
          copyright={`© ${new Date().getFullYear()} Company`}
          logo="./images/image2.png"
          logoInverted="https://uploads.divjoy.com/logo-white.svg"
          sticky={true}
        />
      </>
    </ThemeProvider>
  );
}

export default MyApp;
