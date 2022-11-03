import {useEffect, useState} from "react";
import 'util/analytics';
import '../styles/globals.css';
import '../styles/fonts.css';
import {useRouter} from "next/router";
import { ThemeProvider } from 'util/theme';
import '@fontsource/noto-sans-hebrew'; // Defaults to weight 400.
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { BackdropLoading } from '../components/Backdrop';
import CrispWithNoSSR from "components/Crisp";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [showBackDrop, setShowBackDrop] = useState(false);
  const router = useRouter();
    // const { siteParams } = pageProps;
  // console.log('siteParams', siteParams);

  useEffect(() => {
    // crisp chat:
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "f64db7de-7c72-40ea-9f36-2faac0582e16";
    (() => {
      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("body")[0].appendChild(s);
    })();

    const showBackDrop = (url, { shallow }) => {
      setShowBackDrop(true);
    };
    const hideBackDrop = (url, { shallow }) => {
      setShowBackDrop(false);
    };
    router.events.on('routeChangeStart', showBackDrop);
    router.events.on('routeChangeComplete', hideBackDrop);
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', showBackDrop);
      router.events.off('routeChangeComplete', hideBackDrop);
    };
  }, []);

  return (
    // <CacheProvider value={cacheRtl}>
    // <ThemeProvider theme={theme}>
    <ThemeProvider>
      <GoogleAnalytics
        strategy='lazyOnload'
        trackPageViews
        gtagUrl='/gtag.js'
      />
      {getLayout(<Component {...pageProps} />)}
      <CrispWithNoSSR />
      {showBackDrop && (
        <BackdropLoading key={showBackDrop} />
      )}
    </ThemeProvider>
    // </CacheProvider>
  );
}

export default MyApp;
