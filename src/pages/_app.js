import React from 'react';
// import Navbar from "components/Navbar";
// import Footer from "components/Footer";
import 'util/analytics';
import '../styles/globals.css';
import '../styles/fonts.css';
import { ThemeProvider } from 'util/theme';
import '@fontsource/noto-sans-hebrew'; // Defaults to weight 400.
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <GoogleAnalytics trackPageViews />
      <>{getLayout(<Component {...pageProps} />)}</>
    </ThemeProvider>
  );
}

export default MyApp;
