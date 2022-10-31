import React, { useState, useEffect } from 'react';
import Meta from 'components/Meta';
import NestedLayout from 'components/NestedLayout';
import Section from 'components/Section';
import { Box, AppBar } from '@mui/material';
import VideoText from 'components/VideoText';
import VolumeIcon from 'components/VolumeIcon';
import { useWindowWidth } from '@react-hook/window-size';
import MyFriends from 'components/MyFriends';
import Vimeo from '@u-wave/react-vimeo';
import {
  getMyFriendsPage,
  getMainData,
  getTicketsInformationData,
  getSocialIcons,
  getAllNewsFlashes,
  getAllShows,
  getAllFaqs,
  getAllFooters,
  getMenuItems,
} from '../lib/datocms';

function MyFriendsPage(props) {
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

  const { mainData, myFriendsPageData } = props;

  const {
    mainVideo,
    mainVideoMobile,
    videoBigText,
    videoSmallText,
    isDisplayFlag,
  } = mainData;

  return (
    <>
      <Meta title='My Friends' />
      <Section
        size='auto'
        sx={{
          // minHeight: '796px',
          backgroundColor: '#000',
          width: '100%',
        }}>
        <MyFriends
          pageData={myFriendsPageData}
          isDesktopLayout={isDesktopLayout}
        />
      </Section>
    </>
  );
}

export default MyFriendsPage;

MyFriendsPage.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>;
};

export async function getStaticProps() {
  return {
    props: {
      myFriendsPageData: (await getMyFriendsPage()) || [],
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
