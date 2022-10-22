import React from 'react';
import Meta from 'components/Meta';
import '@fontsource/noto-sans-hebrew'; // Defaults to weight 400.
import {
  getMainData,
  getTicketsInformationData,
  getSocialIcons,
  getAllShows,
  getAllFaqs,
  getAllFooters,
  getMenuItems,
  getNews,
  getAbout,
  getAllActors,
  getAllShops,
  getAllLastNews,
  getAllMusics,
  getAllGames,
} from '../lib/datocms';
// import HeroSection from "components/HeroSection";
// import FeaturesSection from "components/FeaturesSection";
// import TeamBiosSection from "components/TeamBiosSection";
import { NewsTicker } from 'components/NewsTicker';
import AboutSection from 'components/Sections/AboutSection';
import ActorsSection from 'components/Sections/ActorsSection';
import ShopSection from 'components/Sections/ShopSection';
import LastNewsSection from 'components/Sections/LastNewsSection';
import MusicSection from 'components/Sections/MusicSection';
import GamesSection from 'components/Sections/GamesSection';
import AllFestigalsSection from 'components/Sections/AllFestigalsSection';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

function IndexPage(props) {
  const {
    mainData,
    ticketsInformationData,
    socialIcons,
    showsItems,
    faqItems,
    footerItems,
    menuItems,
    news,
    about,
    actors,
    products,
    lastNews,
    musics,
    games,
  } = props;

  console.log('mainData', mainData);
  console.log('showsItems', showsItems);
  console.log('ticketsInformationData', ticketsInformationData);

  return (
    <>
      <Navbar
        mainData={mainData}
        ticketsInformationData={ticketsInformationData}
        showsItems={showsItems}
        faqItems={faqItems}
        socialIcons={socialIcons}
        menuItems={menuItems}
        color='default'
        logo='./logo.png'
        logoInverted='https://uploads.divjoy.com/logo-white.svg'
      />
      <Meta />
      <NewsTicker item={news} />
      <AboutSection item={about} />
      <ActorsSection items={actors} />
      <ShopSection items={products} mainData={mainData} />
      <LastNewsSection
        items={lastNews}
        mainData={mainData}
        socialIcons={socialIcons}
      />
      <MusicSection items={musics} mainData={mainData} />
      <GamesSection items={games} mainData={mainData} />
      <AllFestigalsSection mainData={mainData} />

      <Footer
        mainData={mainData}
        socialIcons={socialIcons}
        items={footerItems}
        logo='./images/image2.png'
      />
    </>
  );
}

export default IndexPage;

export async function getStaticProps() {
  return {
    props: {
      mainData: (await getMainData()) || [],
      ticketsInformationData: (await getTicketsInformationData()) || [],
      socialIcons: (await getSocialIcons()) || [],
      showsItems: (await getAllShows()) || [],
      faqItems: (await getAllFaqs()) || [],
      footerItems: (await getAllFooters()) || [],
      menuItems: (await getMenuItems()) || [],
      news: (await getNews()) || [],
      about: (await getAbout()) || [],
      actors: (await getAllActors()) || [],
      products: (await getAllShops()) || [],
      games: (await getAllGames()) || [],
      lastNews: (await getAllLastNews()) || [],
      musics: (await getAllMusics()) || [],
    },
  };
}
