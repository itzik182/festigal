import React, { useState, useEffect } from 'react';
import Meta from 'components/Meta';
import NestedLayout from 'components/NestedLayout';
import Section from 'components/Section';
import { Box, AppBar } from '@mui/material';
import VideoText from 'components/VideoText';
import VolumeIcon from 'components/VolumeIcon';
import { useWindowWidth } from '@react-hook/window-size';
import About from 'components/About';
import Vimeo from '@u-wave/react-vimeo';
import {
  getMyBioPage,
  getMainData,
  getTicketsInformationData,
  getSocialIcons,
  getAllNewsFlashes,
  getAllShows,
  getAllFaqs,
  getAllFooters,
  getMenuItems,
} from '../lib/datocms';

function AboutPage(props) {
  const [isVideoMute, setVideoMute] = useState(true);
  const [isVideoReady, setVideoReady] = useState(false);
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 960;
  const [isDesktopLayout, setIsDesktopLayout] = useState(true);

  useEffect(() => {
    if (isDesktop !== isDesktopLayout) {
      setIsDesktopLayout(isDesktop);
    }
  }, [windowWidth]);

  useEffect(() => {
    // console.log('isVideoMute', isVideoMute);
  }, [isVideoMute, isVideoReady]);

  const { mainData, aboutData } = props;

  const {
    mainVideo,
    mainVideoMobile,
    videoBigText,
    videoSmallText,
    isDisplayFlag,
  } = mainData;

  const { video, videoMobile, videoText } = aboutData;

  const videoOnReady = () => {
    setVideoReady(true);
  };

  return (
    <>
      <Meta title='About Festigal' />
      <Section
        size='auto'
        sx={{
          // minHeight: '796px',
          backgroundColor: '#000',
          width: '100%',
        }}>
        <Box sx={{
            position: 'relative',
        }}>
          <Box
            sx={{
              display: isVideoReady ? 'none' : 'block',
              width: '100%',
              minHeight: isDesktopLayout ? '800px' : '750px',
              backgroundColor: '#000',
              backgroundSize: `cover`,
              backgroundImage: `url('./background/videoBg.png')`,
              backgroundPosition: 'center',
            }}></Box>
          {isDesktopLayout && (
            <Vimeo
              onPlay={() => videoOnReady()}
              // transparent={false}
              video={video?.url}
              showTitle={false}
              loop={true}
              controls={true}
              autoplay={true}
              playsInline={true}
              height='796px'
              width={'100%'}
              volume={isVideoMute ? 0 : 1}
              // paused={!isVideoMute}
              muted={isVideoMute}
              // background={true}
              responsive={true}
              style={{
                display: !isVideoReady ? 'none' : 'block',
                margin: '0px auto',
                position: 'relative',
                // minHeight: '796px',
                width: '100%',
              }}
            />
          )}
          {!isDesktopLayout && (
            <Vimeo
              onPlay={() => videoOnReady()}
              video={videoMobile?.url}
              showTitle={false}
              loop={true}
              controls={true}
              autoplay={true}
              playsInline={true}
              height='796px'
              width={'100%'}
              volume={isVideoMute ? 0 : 1}
              // paused={!isVideoMute}
              muted={isVideoMute}
              background={true}
              responsive={true}
              style={{
                display: !isVideoReady ? 'none' : 'block',
                margin: '0px auto',
                position: 'relative',
                // minHeight: '796px',
                width: '100%',
              }}
            />
          )}
          <VolumeIcon
            isVideoMute={isVideoMute}
            setVideoMute={setVideoMute}
            isDesktopLayout={isDesktopLayout}
          />
          {(isDesktopLayout ? isVideoReady : true) && (
            <VideoText
              sx={{ top: isDesktopLayout ? '60%' : '103%', bottom: 'auto' }}
              videoBigText={videoText}
              isDesktopLayout={isDesktopLayout}
              isDisplayFlag={false}
            />
          )}
        </Box>
        <About pageData={aboutData} isDesktopLayout={isDesktopLayout} />
      </Section>
    </>
  );
}

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>;
};

export async function getStaticProps() {
  return {
    props: {
      aboutData: (await getMyBioPage()) || [],
      mainData: (await getMainData()) || [],
      ticketsInformationData: (await getTicketsInformationData()) || [],
      socialIcons: (await getSocialIcons()) || [],
      newsFlashesItems: (await getAllNewsFlashes()) || [],
      showsItems: (await getAllShows()) || [],
      faqItems: (await getAllFaqs()) || [],
      footerItems: (await getAllFooters()) || [],
      menuItems: (await getMenuItems()) || [],
    },
  };
}
