import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SocialIcons from 'components/SocialIcons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';
import { useWindowWidth } from '@react-hook/window-size';
import Hidden from '@material-ui/core/Hidden';

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
    width: '139px',
    height: '101px',
    zIndex: '1',

    '&.layerRight': {
      background:
        'transparent url(./mobile/header/layer-right.png) 0% 0% no-repeat padding-box',
      right: '0',
      top: '-9px',
    },
    '&.layerLeft': {
      background:
        'transparent url(./mobile/header/layer-left.png) 0% 0% no-repeat padding-box',
      left: '0',
      top: '-9px',
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
      top: '20px',
      right: '25px',
    },
  },
  InformationDrawerIcon: {
    top: '68px',
    left: '40px',
    zIndex: '10',
    position: 'absolute',
    width: 'min-content',
    fontFamily: "'Noto Sans Hebrew'",
    fontSize: '19px',
    '&.mobile': {
      top: '22px',
      left: '24px',
      // 'button': {
      //   fontSize: '14px',
      // },
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

export const HeaderBar = (props) => {
  // const windowWidth = useWindowWidth();
  // const isDesktopLayout = windowWidth >= 960;


  // console.log('windowWidth', windowWidth);
  // console.log('isDesktopLayout', isDesktopLayout);

  const {
    isDesktopLayout = true,
    socialIcons,
    ticketsInformationText,
    setMenuDrawerOpen,
    setInformationDrawerOpen,
    setNewsFlashesDrawerOpen,
  } = props;
  const classes = useStyles(isDesktopLayout);

  return (
    <AppBar
      position='absolute'
      color='transparent'
      elevation={0}
      sx={{
        position: 'absolute',
        top: 0,
      }}>
      <Box
        sx={{
          height: '133px',
          width: '95%',
          margin: '20px auto 0',
          position: 'relative',
          zIndex: '1',
        }}>
        {/* Menu Drawer Button */}
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
          {/* News Flashes Drawer Button */}
          <Box
            sx={{
              position: 'absolute',
              left: '180px',
              zIndex: '10',
              top: '30px',
            }}>
            <IconButton
              onClick={() => {
                setNewsFlashesDrawerOpen(true);
              }}
              color='inherit'>
              <img src='./images/ring.svg' alt='Ring' />
            </IconButton>
          </Box>
        </Hidden>
        {/* Information Drawer Button */}
        <Box
          className={`${classes.InformationDrawerIcon} ${
            !isDesktopLayout && 'mobile'
          }`}>
          <Box className={classes.shadowBg} sx={{
            height: !isDesktopLayout && '58px !important',
          }}></Box>
          <IconButton
            style={{
              fontFamily: 'Noto Sans Hebrew',
              fontSize: isDesktopLayout ? '19px' : '14px',
              fontWeight: 'bold',
            }}
            onClick={() => {
              setInformationDrawerOpen(true);
            }}
            color='inherit'>
            {ticketsInformationText}
          </IconButton>
        </Box>
        <Box
          sx={{
            background:
            isDesktopLayout ? 'transparent url(./header/header-bg.png) center center no-repeat padding-box' :
            'transparent url(mobile/header/header-bg.png) center -9% no-repeat padding-box',
            // 'transparent linear-gradient(270deg, #296B78 0%, #29ABBC 29%, #2CA4B2 40%, #28AFBF 56%, #286673 100%) 0% 0% no-repeat padding-box',
            width: '80%',
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
                style={{ margin: '0 10px' }}
              />
            </Box>
          </Hidden>
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
            </Toolbar>
          </Container>
        </Box>
      </Box>
    </AppBar>
  );
};

export default HeaderBar;
