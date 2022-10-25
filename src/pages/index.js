import React from 'react';
import Meta from 'components/Meta';
import '@fontsource/noto-sans-hebrew'; // Defaults to weight 400.
import {
  getMainData,
  getTicketsInformationData,
  getSocialIcons,
  getAllNewsFlashes,
  getAllShows,
  getAllFaqs,
  getAllFooters,
  getMenuItems,
  getNewsTicker,
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
    newsFlashesItems,
    showsItems,
    faqItems,
    footerItems,
    menuItems,
    newsTicker,
    about,
    actors,
    products,
    lastNews,
    musics,
    games,
  } = props;

  console.log('mainData', mainData);
  console.log('newsTicker', newsTicker);
  // console.log('faqItems', faqItems);

  return (
    <>
      <Navbar
        mainData={mainData}
        ticketsInformationData={ticketsInformationData}
        newsFlashesItems={newsFlashesItems}
        showsItems={showsItems}
        faqItems={faqItems}
        socialIcons={socialIcons}
        menuItems={menuItems}
      />
      <Meta />
      {newsTicker.isDisplay && <NewsTicker item={newsTicker} />}
      <AboutSection item={about} />
      <ActorsSection items={actors} socialIcons={socialIcons} />
      {/* <ShopSection items={products} mainData={mainData} /> */}
      {/* <LastNewsSection
        items={lastNews}
        mainData={mainData}
        socialIcons={socialIcons}
      /> */}
      <MusicSection items={musics} mainData={mainData} />
      <GamesSection items={games} mainData={mainData} />
      <AllFestigalsSection mainData={mainData} />

      {/* <Footer
        mainData={mainData}
        socialIcons={socialIcons}
        items={footerItems}
      /> */}
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
      newsFlashesItems: (await getAllNewsFlashes()) || [],
      showsItems: (await getAllShows()) || [],
      faqItems: (await getAllFaqs()) || [],
      footerItems: (await getAllFooters()) || [],
      menuItems: (await getMenuItems()) || [],
      newsTicker: (await getNewsTicker()) || [],
      about: (await getAbout()) || [],
      actors: (await getAllActors()) || [],
      products: (await getAllShops()) || [],
      games: (await getAllGames()) || [],
      lastNews: (await getAllLastNews()) || [],
      musics: (await getAllMusics()) || [],
    },
  };
}
