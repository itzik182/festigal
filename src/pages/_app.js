import React from 'react';
// import Navbar from "components/Navbar";
// import Footer from "components/Footer";
import 'util/analytics';
import '../styles/globals.css';
import '../styles/fonts.css';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider } from 'util/theme';
import '@fontsource/noto-sans-hebrew'; // Defaults to weight 400.
import { GoogleAnalytics } from 'nextjs-google-analytics';

import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // const theme = createTheme({
  //   direction: 'rtl', // Both here and <body dir="rtl">
  // });

//   // Create rtl cache
// const cacheRtl = createCache({
//   key: 'muirtl',
//   stylisPlugins: [prefixer, rtlPlugin],
// });

  return (
    // <CacheProvider value={cacheRtl}>
    // <ThemeProvider theme={theme}>
    <ThemeProvider>
      <GoogleAnalytics
        strategy='lazyOnload'
        trackPageViews
        gtagUrl='/gtag.js'
      />
      <>{getLayout(<Component {...pageProps} />)}</>
    </ThemeProvider>
    // </CacheProvider>
  );
}

export default MyApp;
