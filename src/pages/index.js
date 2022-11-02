import { useState, useEffect } from 'react';
import Meta from 'components/Meta';
// import '@fontsource/noto-sans-hebrew'; // Defaults to weight 400.
import Navbar from 'components/Navbar';
import { NewsTicker } from 'components/NewsTicker';
import AboutSection from 'components/Sections/AboutSection';
import ActorsSection from 'components/Sections/ActorsSection';
import ShopSection from 'components/Sections/ShopSection';
import LastNewsSection from 'components/Sections/LastNewsSection';
import MusicSection from 'components/Sections/MusicSection';
import GamesSection from 'components/Sections/GamesSection';
import AllFestigalsSection from 'components/Sections/AllFestigalsSection';
import NestedLayout from 'components/NestedLayout';
import { useWindowWidth } from '@react-hook/window-size';
import {
  getSiteParams,
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

function IndexPage(props) {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 960;
  const [isDesktopLayout, setIsDesktopLayout] = useState(true);

  useEffect(() => {
    if (isDesktop !== isDesktopLayout) {
      setIsDesktopLayout(isDesktop);
    }
  }, [windowWidth]);

  const {
    mainData,
    socialIcons,
    ticketsInformationData,
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

  // console.log('mainData', mainData);
  // console.log('newsTicker', newsTicker);
  // console.log('faqItems', faqItems);

  return (
    <>
      <Meta />
      <Navbar
        isDesktopLayout={isDesktopLayout}
        mainData={mainData}
        ticketsInformationData={ticketsInformationData}
        newsFlashesItems={newsFlashesItems}
        showsItems={showsItems}
        faqItems={faqItems}
        socialIcons={socialIcons}
        menuItems={menuItems}
      />
      {newsTicker.isDisplay && (
        <NewsTicker item={newsTicker} isDesktopLayout={isDesktopLayout} />
      )}
      <AboutSection
        item={about}
        socialIcons={socialIcons}
        isDesktopLayout={isDesktopLayout}
      />
      <ActorsSection
        items={actors}
        socialIcons={socialIcons}
        isDesktopLayout={isDesktopLayout}
      />
      <ShopSection
        items={products}
        socialIcons={socialIcons}
        mainData={mainData}
        isDesktopLayout={isDesktopLayout}
      />
      <LastNewsSection
        items={lastNews}
        mainData={mainData}
        socialIcons={socialIcons}
        isDesktopLayout={isDesktopLayout}
      />
      <MusicSection
        items={musics}
        mainData={mainData}
        socialIcons={socialIcons}
        isDesktopLayout={isDesktopLayout}
      />
      <GamesSection
        items={games}
        mainData={mainData}
        socialIcons={socialIcons}
        isDesktopLayout={isDesktopLayout}
      />
      <AllFestigalsSection
        mainData={mainData}
        socialIcons={socialIcons}
        isDesktopLayout={isDesktopLayout}
      />

      {/* <Footer
        mainData={mainData}
        socialIcons={socialIcons}
        items={footerItems}
        isDesktopLayout={isDesktopLayout}
      /> */}
    </>
  );
}

export default IndexPage;

IndexPage.getLayout = function getLayout(page) {
  return (
    <NestedLayout>
      {page}
    </NestedLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      // siteParams: (await getSiteParams()) || [],
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
