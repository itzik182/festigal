import React from "react";
import Meta from "components/Meta";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import TeamBiosSection from "components/TeamBiosSection";
import MoveStuffAround from "components/Ticker";
import FirstSection from "components/FirstSection";
import SecondSection from "components/SecondSection";
import ThirdSection from "components/ThirdSection";
import FourthSection from "components/FourthSection";
import SeventhSection from "components/SeventhSection";


function IndexPage(props) {
  return (
    <>
      <Meta />
      <MoveStuffAround />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <SeventhSection />
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
