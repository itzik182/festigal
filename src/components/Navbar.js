import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
// import Hidden from '@material-ui/core/Hidden';
// import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
// import YoutubeEmbed from '../components/YoutubeEmbed';
import FirstShowFlag from 'components/FirstShowFlag';
import VideoText from 'components/VideoText';
import VolumeIcon from 'components/VolumeIcon';
import Vimeo from '@u-wave/react-vimeo';

function Navbar(props) {
  const [isVideoMute, setVideoMute] = useState(true);
  const [isVideoReady, setVideoReady] = useState(false);
  // const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  // const [informationDrawerOpen, setInformationDrawerOpen] = useState(false);
  // const [newsFlashesDrawerOpen, setNewsFlashesDrawerOpen] = useState(false);

  useEffect(() => {
    // console.log('isVideoMute', isVideoMute);
  }, [isVideoMute, isVideoReady]);

  const {
    isDesktopLayout = true,
    // menuItems,
    // newsFlashesItems,
    // showsItems,
    // faqItems,
    mainData,
    // ticketsInformationData,
    // socialIcons,
  } = props;

  const {
    mainVideo,
    mainVideoMobile,
    flagText,
    firstShowDate,
    flagButtonText,
    showLink,
    videoBigText,
    videoSmallText,
    // ticketsInformationText,
    // ticketsInformationLink,
    // headerShopText,
    // headerShopLink,
    // allNewsFlashText,
    // allNewsFlashLink,
    // allNewsFlashMenuText,
    // allNewsFlashMissText,
    isDisplayFlag,
    // arrivalText,
  } = mainData;

  // const handleMenuDrawerItemClick = () => {
  //   setMenuDrawerOpen(false);
  // };

  const videoOnReady = () => {
    setVideoReady(true);
  };

  // const videoId = video?.url?.substring(video?.url.indexOf('=') + 1);

  return (
    <Section
      size='auto'
      sx={{
        // minHeight: '796px',
        backgroundColor: '#000',
        width: '100%',
      }}>
      <Box
        sx={{
          // transition: 'visibility 0.3s linear 2s',
          // opacity: isVideoReady ? '0' : '1',
          display: isVideoReady ? 'none' : 'block',
          // visibility: isVideoReady ? 'hidden' : 'visible',
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
          video={mainVideo?.url}
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
          video={mainVideoMobile?.url}
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
      {isDisplayFlag && (
        <FirstShowFlag
          flagButtonText={flagButtonText}
          showLink={showLink}
          flagText={flagText}
          firstShowDate={firstShowDate}
        />
      )}
      <VideoText
        videoBigText={videoBigText}
        videoSmallText={videoSmallText}
        isDesktopLayout={isDesktopLayout}
        isDisplayFlag={isDisplayFlag}
      />
    </Section>
  );
}

export default Navbar;
