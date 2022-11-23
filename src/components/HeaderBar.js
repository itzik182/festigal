import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SocialIcons from 'components/SocialIcons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Link from 'next/link';
import Hidden from '@material-ui/core/Hidden';

const HeaderBar = (props) => {
  const {
    isDesktopLayout = true,
    socialIcons,
    mainData,
    setMenuDrawerOpen,
    setInformationDrawerOpen,
    setNewsFlashesDrawerOpen,
  } = props;
  const {
    ticketsInformationText,
    headerShopText,
    headerShopLink,
    comingSoonText,
  } = mainData;

  const classes = useStyles(isDesktopLayout);

  return (
    <AppBar
      position='relative'
      color='transparent'
      elevation={0}
      style={{
        // position: 'absolute',
        top: 0,
        background: '#000000',
      }}>
      <Box
        sx={{
          height: '133px',
          width: '95%',
          margin: isDesktopLayout ? '10px auto 0' : '15px auto 0',
          position: 'relative',
          zIndex: '1',
        }}>
        {/* Button to open Menu Drawer Button */}
        <Box
          className={`${classes.menuDrawerIcon} ${
            !isDesktopLayout && 'mobile'
          }`}>
          <IconButton
            onClick={() => {
              setMenuDrawerOpen(true);
            }}
            color='inherit'>
            <MenuIcon style={{ fontSize: '40px' }} />
          </IconButton>
        </Box>
        <Hidden implementation='css' smDown>
          {/* Button to open News Flashes Drawer Button */}
          <Box
            sx={{
              position: 'absolute',
              left: '180px',
              zIndex: '10',
              top: '30px',
              display: 'flex',
              alignItems: 'baseline',
            }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '40px',
                top: '5px',
                position: 'relative',
              }}>
              <IconButton
                style={{
                  paddingBottom: '5px',
                }}
                onClick={() => {
                  window.open(headerShopLink, '_blank');
                }}
                color='inherit'>
                <img src='./images/my_store.png' alt='store' />
              </IconButton>

            </Box>
            <IconButton
              onClick={() => {
                setNewsFlashesDrawerOpen(true);
              }}
              color='inherit'>
              <img src='./images/ring.svg' alt='ring' />
            </IconButton>
          </Box>
        </Hidden>
        {/* Button to open Information Drawer Button */}
        <Box
          className={`${classes.InformationDrawerIcon} ${
            !isDesktopLayout && 'mobile'
          }`}>
          <Box
            className={classes.shadowBg}
            sx={{
              height: !isDesktopLayout && '58px !important',
            }}></Box>
          {/*<IconButton*/}
          {/*  style={{*/}
          {/*    fontFamily: 'Noto Sans Hebrew',*/}
          {/*    fontSize: isDesktopLayout ? '19px' : '14px',*/}
          {/*    fontWeight: '800',*/}
          {/*    lineHeight: isDesktopLayout ? 'initial' : '16px',*/}
          {/*  }}*/}
          {/*  onClick={() => {*/}
          {/*    setInformationDrawerOpen(true);*/}
          {/*  }}*/}
          {/*  color='inherit'>*/}
          {/*  {ticketsInformationText}*/}
          {/*</IconButton>*/}
            {ticketsInformationText}
        </Box>
        <Box
          sx={{
            background: isDesktopLayout
              ? 'transparent url(./header/header-bg.png) center center no-repeat padding-box'
              : 'transparent url(mobile/header/header-bg.png) center 0% no-repeat padding-box',
            // 'transparent linear-gradient(270deg, #296B78 0%, #29ABBC 29%, #2CA4B2 40%, #28AFBF 56%, #286673 100%) 0% 0% no-repeat padding-box',
            width: isDesktopLayout ? '80%' : '74%',
            height: '100%',
            margin: 'auto',
          }}>
          <Box
            className={`${
              isDesktopLayout ? classes.layers : classes.layersMobile
            } layerRight`}></Box>
          <Box
            className={`${
              isDesktopLayout ? classes.layers : classes.layersMobile
            } layerLeft`}></Box>
          <Hidden implementation='css' smDown>
            <Box
              sx={{
                position: 'absolute',
                right: '220px',
                zIndex: '1',
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                alignItems: 'center',
                top: '0',
                bottom: '0',
              }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '5px 25px 0',
                }}>
                <img src='./images/my_small.png' alt='my-festigal logo' />
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: '900',
                    fontFamily: 'Noto Sans Hebrew',
                    letterSpacing: '0.19px',
                    color: '#D08F20',
                  }}>
                  {comingSoonText}
                </span>
              </Box>
              <SocialIcons
                items={socialIcons}
                isUseOriginalSize={true}
                style={{ margin: '0 10px' }}
              />
            </Box>
          </Hidden>
          {/* <Container
            disableGutters={true}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
            }}> */}
          <Box
            sx={{
              textAlign: 'center',
            }}>
            <Link href='/'>
              <a>
                <img
                  src={
                    isDesktopLayout
                      ? './logo/logo-web-small.png'
                      : './mobile/logo/logo.png'
                  }
                  alt='Logo'
                  style={{
                    marginTop: isDesktopLayout ? '10px' : '0',
                  }}
                />
              </a>
            </Link>
            <div className={classes.spacer} />
            {/* <Hidden smUp={true} implementation="css"> */}

            {/* </Hidden> */}
          </Box>
          {/* </Container> */}
        </Box>
      </Box>
    </AppBar>
  );
};

const useStyles = makeStyles((isDesktopLayout) => ({
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
  layersMobile: {
    position: 'absolute',
    width: '309px',
    height: '111px',
    zIndex: '1',

    '&.layerRight': {
      background:
        'transparent url(./mobile/header/layer-right.png) 110% 0% no-repeat padding-box',
      right: '-3px',
      top: '-7px',
    },
    '&.layerLeft': {
      background:
        'transparent url(./mobile/header/layer-left.png) -16% 0% no-repeat padding-box',
      left: '-3px',
      top: '-7px',
    },
  },
  spacer: {
    flexGrow: 1,
  },
  menuDrawerIcon: {
    position: 'absolute',
    right: '60px',
    top: '75px',
    zIndex: '10',
    '&.mobile': {
      top: '34px',
      right: '20px',
    },
  },
  InformationDrawerIcon: {
    top: '68px',
    left: '40px',
    zIndex: '10',
    position: 'absolute',
    width: 'min-content',
    // fontFamily: "'Noto Sans Hebrew'",
    fontFamily: 'Noto SansHebrew Extra Bold',
    fontSize: '19px',
    '&.mobile': {
      top: '35px',
      left: '10px',
    },
  },
  shadowBg: {
    filter: 'blur(18px)',
    background:
      "transparent url('images/Ellipse65.png') 50% 50% no-repeat padding-box",
    height: isDesktopLayout ? '98px' : '58px',
    position: 'absolute',
    width: '100%',
  },
}));

export default HeaderBar;
