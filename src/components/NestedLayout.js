import { useState, useEffect } from 'react';
import { Box, AppBar } from '@mui/material';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import HeaderBar from 'components/HeaderBar';
import { MenuDrawer } from './Drawer/MenuDrawer/MenuDrawer';
import { InformationDrawer } from './Drawer/InformationDrawer/InformationDrawer';
import { NewsFlashesDrawer } from './Drawer/NewsFlashesDrawer/NewsFlashesDrawer';
import { useWindowWidth } from '@react-hook/window-size';

export default function NestedLayout(props) {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 960;
  const [isDesktopLayout, setIsDesktopLayout] = useState(true);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [informationDrawerOpen, setInformationDrawerOpen] = useState(false);
  const [newsFlashesDrawerOpen, setNewsFlashesDrawerOpen] = useState(false);

  useEffect(() => {
    if (isDesktop !== isDesktopLayout) {
      setIsDesktopLayout(isDesktop);
    }
  }, [windowWidth]);

  const { children } = props;
  const {
    menuItems,
    newsFlashesItems,
    showsItems,
    faqItems,
    footerItems,
    mainData,
    socialIcons,
    ticketsInformationData,
  } = children?.props;
  // console.log('props', props);

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
    headerShopText,
    headerShopLink,
    allNewsFlashText,
    allNewsFlashLink,
    allNewsFlashMenuText,
    allNewsFlashMissText,
    isDisplayFlag,
    arrivalText,
  } = mainData;

  const handleMenuDrawerItemClick = () => {
    setMenuDrawerOpen(false);
  };

  return (
    <>
      <Box>
        {/* <Navbar
          isDesktopLayout={isDesktopLayout}
          mainData={mainData}
          ticketsInformationData={ticketsInformationData}
          newsFlashesItems={newsFlashesItems}
          showsItems={showsItems}
          faqItems={faqItems}
          socialIcons={socialIcons}
          menuItems={menuItems}
        /> */}
        <HeaderBar
          isDesktopLayout={isDesktopLayout}
          socialIcons={socialIcons}
          mainData={mainData}
          setMenuDrawerOpen={setMenuDrawerOpen}
          setInformationDrawerOpen={setInformationDrawerOpen}
          setNewsFlashesDrawerOpen={setNewsFlashesDrawerOpen}
        />
        <Box component='main' sx={{}}>
          {children}
        </Box>
        <Footer
          mainData={mainData}
          socialIcons={socialIcons}
          items={footerItems}
          isDesktopLayout={isDesktopLayout}
        />
      </Box>

      <MenuDrawer
        items={menuItems}
        handleItemClick={handleMenuDrawerItemClick}
        ticketsInformationText={ticketsInformationText}
        ticketsInformationLink={ticketsInformationLink}
        allNewsFlashMenuText={allNewsFlashMenuText}
        socialIcons={socialIcons}
        drawerOpen={menuDrawerOpen}
        setDrawerOpen={setMenuDrawerOpen}
        setNewsFlashesDrawerOpen={setNewsFlashesDrawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
      <InformationDrawer
        ticketsInformationData={ticketsInformationData}
        showsItems={showsItems}
        faqItems={faqItems}
        ticketsInformationText={ticketsInformationText}
        arrivalText={arrivalText}
        drawerOpen={informationDrawerOpen}
        setDrawerOpen={setInformationDrawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
      <NewsFlashesDrawer
        items={newsFlashesItems}
        allNewsFlashText={allNewsFlashText}
        allNewsFlashLink={allNewsFlashLink}
        allNewsFlashMissText={allNewsFlashMissText}
        drawerOpen={newsFlashesDrawerOpen}
        setDrawerOpen={setNewsFlashesDrawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
    </>
  );
}
