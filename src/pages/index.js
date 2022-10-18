import React from "react";
import Meta from "components/Meta";
import { getNews, getAbout, getAllActors, getAllShops, getAllLastNews, getAllMusics, getAllGames } from "../lib/datocms";
// import HeroSection from "components/HeroSection";
// import FeaturesSection from "components/FeaturesSection";
// import TeamBiosSection from "components/TeamBiosSection";
import { NewsTicker } from "components/NewsTicker";
import AboutSection from "components/Sections/AboutSection";
import ActorsSection from "components/Sections/ActorsSection";
import ShopSection from "components/Sections/ShopSection";
import LastNewsSection from "components/Sections/LastNewsSection";
import MusicSection from "components/Sections/MusicSection";
import GamesSection from "components/Sections/GamesSection";
import AllFestigalsSection from "components/Sections/AllFestigalsSection";



function IndexPage(props) {
  const { news, about, actors, products, lastNews, musics, games } = props;

  console.log('actors', actors);

  return (
    <>
      <Meta />
      <NewsTicker item={news} />
      <AboutSection item={about} />
      <ActorsSection items={actors} />
      <ShopSection items={products} />
      <LastNewsSection items={lastNews} />
      <MusicSection items={musics} />
      <GamesSection items={games} />
      <AllFestigalsSection />
      {/* <HeroSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        image="https://uploads.divjoy.com/undraw-japan_ubgk.svg"
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      /> */}
    </>
  );
}

export default IndexPage;

export async function getStaticProps() {
  
  return {
    props: {
      news: await getNews() || [],
      about: await getAbout() || [],
      actors: await getAllActors() || [],
      products: await getAllShops() || [],
      games: await getAllGames() || [],
      lastNews: await getAllLastNews() || [],
      musics: await getAllMusics() || [],
    },
  };
}
