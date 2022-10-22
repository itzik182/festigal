import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
// import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import Drawer from '@material-ui/core/Drawer';
// import Drawer from '@mui/material/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import NightsStayIcon from '@material-ui/icons/NightsStay';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import { useDarkMode } from 'util/theme';
import YoutubeEmbed from '../components/YoutubeEmbed';
import { MenuDrawer } from './Drawer/MenuDrawer/MenuDrawer';
import { InformationDrawer } from './Drawer/InformationDrawer/InformationDrawer';
import SocialIcons from 'components/SocialIcons';

const useStyles = makeStyles((theme) => ({
  layers: {
    position: 'absolute',
    width: '508px',
    height: '182px',
    zIndex: '1',

    '&.layerRight': {
      background:
        'transparent url(./header/layer-right.png) 0% 0% no-repeat padding-box',
      right: '0',
      top: '-9px',
    },
    '&.layerLeft': {
      background:
        'transparent url(./header/layer-left.png) 0% 0% no-repeat padding-box',
      left: '0',
      top: '-9px',
    },
  },
  drawerList: {
    width: 590,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const {
    menuItems,
    showsItems,
    faqItems,
    mainData,
    ticketsInformationData,
    socialIcons,
  } = props;

  const darkMode = useDarkMode();
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [informationDrawerOpen, setInformationDrawerOpen] = useState(false);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  const handleItemClick = () => {
    setMenuDrawerOpen(false);
  };

  const videoId = mainData?.video?.url?.substring(
    mainData?.video?.url.indexOf('=') + 1
  );

  return (
    <Section
      bgColor={props.color}
      size='auto'
      sx={{
        height: '755px',
      }}>
      <YoutubeEmbed
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
      />
      <AppBar position='static' color='transparent' elevation={0}>
        <Box
          sx={{
            height: '133px',
            width: '95%',
            margin: '20px auto 0',
            position: 'relative',
            zIndex: '1',
          }}>
          <Box
            sx={{
              position: 'absolute',
              right: '60px',
              zIndex: '10',
              top: '75px',
            }}>
            <IconButton
              onClick={() => {
                setMenuDrawerOpen(true);
              }}
              color='inherit'>
              <MenuIcon style={{ fontSize: '40px' }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              top: '68px',
              left: '40px',
              zIndex: '10',
              position: 'absolute',
              width: 'min-content',
              fontFamily: "'Noto Sans Hebrew'",
              fontSize: '19px',
            }}>
            <Box
              sx={{
                filter: 'blur(18px)',
                background:
                  "transparent url('images/Ellipse65.png') 50% 50% no-repeat padding-box",
                height: '98px',
                position: 'absolute',
                width: '100%',
              }}></Box>
            <IconButton
              onClick={() => {
                setInformationDrawerOpen(true);
              }}
              color='inherit'>
              {mainData.ticketsInformationText}
            </IconButton>
          </Box>
          <Box
            sx={{
              background:
                'transparent url(./header/header-bg.png) center center no-repeat padding-box',
              // 'transparent linear-gradient(270deg, #296B78 0%, #29ABBC 29%, #2CA4B2 40%, #28AFBF 56%, #286673 100%) 0% 0% no-repeat padding-box',
              width: '80%',
              height: '100%',
              margin: 'auto',
            }}>
            <Box className={`${classes.layers} layerRight`}></Box>
            <Box className={`${classes.layers} layerLeft`}></Box>
            <Box
              sx={{
                position: 'absolute',
                right: '220px',
                zIndex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                top: '0',
                bottom: '0',
              }}>
              <img
                style={{
                  marginLeft: '25px',
                }}
                src='./images/my_small.png'
                alt='my-festigal'
              />
              <SocialIcons
                items={socialIcons}
                isUseOriginalSize={true}
                margin={'0 10px'}
              />
            </Box>
            <Container
              disableGutters={true}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}>
              <Toolbar>
                <Link href='/'>
                  <a>
                    <img
                      src={logo}
                      alt='Logo'
                      style={{
                        marginTop: '10px',
                      }}
                    />
                  </a>
                </Link>
                <div className={classes.spacer} />
                {/* <Hidden smUp={true} implementation="css"> */}

                {/* </Hidden> */}
              </Toolbar>
            </Container>
          </Box>
        </Box>
      </AppBar>
      <MenuDrawer
        items={menuItems}
        handleItemClick={handleItemClick}
        ticketsInformationText={mainData.ticketsInformationText}
        drawerOpen={menuDrawerOpen}
        setDrawerOpen={setMenuDrawerOpen}
      />
      <InformationDrawer
        ticketsInformationData={ticketsInformationData}
        showsItems={showsItems}
        faqItems={faqItems}
        handleItemClick={handleItemClick}
        ticketsInformationText={mainData.ticketsInformationText}
        drawerOpen={informationDrawerOpen}
        setDrawerOpen={setInformationDrawerOpen}
      />
      {/* <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '.MuiPaper-root': {
            background:
              'transparent linear-gradient(180deg, #058E9C 0%, #03474E 100%) 0% 0% no-repeat padding-box;',
            width: '35%',
          },
        }}>
        <DrawerItemList
          ticketsInformationText={mainData.ticketsInformationText}
          items={items}
          handleItemClick={handleItemClick}
          isDrawerOpen={drawerOpen}
        />
      </Drawer> */}
    </Section>
  );
}

export default Navbar;
