import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SocialIcons from 'components/SocialIcons';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';

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
  spacer: {
    flexGrow: 1,
  },
}));

export const HeaderBar = (props) => {
  const classes = useStyles();
  const {
    socialIcons,
    ticketsInformationText,
    setMenuDrawerOpen,
    setInformationDrawerOpen,
    setNewsFlashesDrawerOpen,
  } = props;

  return (
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
            style={{
              fontFamily: 'Noto Sans Hebrew',
              fontSize: '19px',
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
                    src='./logo.png'
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
  );
};

export default HeaderBar;
