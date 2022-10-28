import React, { useState, useEffect } from 'react';
// import Hidden from '@material-ui/core/Hidden';
// import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
// import YoutubeEmbed from '../components/YoutubeEmbed';
import { MenuDrawer } from './Drawer/MenuDrawer/MenuDrawer';
import { InformationDrawer } from './Drawer/InformationDrawer/InformationDrawer';
import { NewsFlashesDrawer } from './Drawer/NewsFlashesDrawer/NewsFlashesDrawer';
import HeaderBar from 'components/HeaderBar';
import FirstShowFlag from 'components/FirstShowFlag';
import VideoText from 'components/VideoText';
import VolumeIcon from 'components/VolumeIcon';
import Vimeo from '@u-wave/react-vimeo';

// const useStyles = makeStyles((theme) => ({

// }));

function Navbar(props) {
  const [isVideoMute, setVideoMute] = useState(true);
  const [isVideoReady, setVideoReady] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [informationDrawerOpen, setInformationDrawerOpen] = useState(false);
  const [newsFlashesDrawerOpen, setNewsFlashesDrawerOpen] = useState(false);

  useEffect(() => {
    console.log('isVideoMute', isVideoMute);
  }, [isVideoMute, isVideoReady]);

  const {
    isDesktopLayout = true,
    menuItems,
    newsFlashesItems,
    showsItems,
    faqItems,
    mainData,
    ticketsInformationData,
    socialIcons,
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
    ticketsInformationText,
    ticketsInformationLink,
    allNewsFlashText,
    allNewsFlashLink,
  } = mainData;

  const handleMenuDrawerItemClick = () => {
    setMenuDrawerOpen(false);
  };

  const videoOnReady = () => {
    setVideoReady(true);
  }

  // const videoId = video?.url?.substring(video?.url.indexOf('=') + 1);

  return (
    <Section
      size='auto'
      sx={
        {
          // minHeight: '796px',
        }
      }>
      {/* <YoutubeEmbed
        // url={'iCAKpASnFgw'}
        url={videoId}
        autoplay={true}
        width={'100%'}
        height={'796px'}
        containerStyle={{
          margin: '0px auto',
          position: 'absolute',
          minHeight: '796px',
        }}
      /> */}
      {isDesktopLayout && <div style={{
        display: isVideoReady ? 'none' : 'block',
        width: "100%",
        minHeight: '800px',
        backgroundColor: '#000',
        backgroundSize: `cover`,
        backgroundImage: `url('./background/videoBg.png')`
      }}></div>}
      {isDesktopLayout && (
        <Vimeo
        onReady={() => videoOnReady()}
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
            margin: '0px auto',
            position: 'relative',
            // minHeight: '796px',
            width: '100%',
          }}
        />
      )}
      <VolumeIcon isVideoMute={isVideoMute} setVideoMute={setVideoMute} />
      {isVideoReady && <FirstShowFlag
        flagButtonText={flagButtonText}
        showLink={showLink}
        flagText={flagText}
        firstShowDate={firstShowDate}
      />}
      {isVideoReady && <VideoText
        videoBigText={videoBigText}
        videoSmallText={videoSmallText}
        isDesktopLayout={isDesktopLayout}
      />}
      <HeaderBar
        isDesktopLayout={isDesktopLayout}
        socialIcons={socialIcons}
        ticketsInformationText={ticketsInformationText}
        setMenuDrawerOpen={setMenuDrawerOpen}
        setInformationDrawerOpen={setInformationDrawerOpen}
        setNewsFlashesDrawerOpen={setNewsFlashesDrawerOpen}
      />

      {/* Drawer: */}

      <MenuDrawer
        items={menuItems}
        handleItemClick={handleMenuDrawerItemClick}
        ticketsInformationText={ticketsInformationText}
        ticketsInformationLink={ticketsInformationLink}
        drawerOpen={menuDrawerOpen}
        setDrawerOpen={setMenuDrawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
      <InformationDrawer
        ticketsInformationData={ticketsInformationData}
        showsItems={showsItems}
        faqItems={faqItems}
        ticketsInformationText={ticketsInformationText}
        drawerOpen={informationDrawerOpen}
        setDrawerOpen={setInformationDrawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
      <NewsFlashesDrawer
        items={newsFlashesItems}
        allNewsFlashText={allNewsFlashText}
        allNewsFlashLink={allNewsFlashLink}
        drawerOpen={newsFlashesDrawerOpen}
        setDrawerOpen={setNewsFlashesDrawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
    </Section>
  );
}

export default Navbar;
