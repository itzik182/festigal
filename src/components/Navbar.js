import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import { useDarkMode } from 'util/theme';
import YoutubeEmbed from '../components/YoutubeEmbed';

const useStyles = makeStyles((theme) => ({
  logo: {
    // height: 28,
    // marginRight: theme.spacing(2),
  },
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
    width: 250,
  },
  spacer: {
    flexGrow: 1,
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const darkMode = useDarkMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
      bgColor={props.color}
      size='auto'
      sx={{
        height: '755px',
      }}>
      <YoutubeEmbed
        url={'iCAKpASnFgw'}
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
            margin: '80px auto',
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
                setDrawerOpen(true);
              }}
              color='inherit'>
              <MenuIcon style={{ fontSize: '40px' }} />
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
            <Container
              disableGutters={true}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
              }}>
              <Toolbar
                style={
                  {
                    // display: 'block',
                  }
                }>
                <Link href='/'>
                  <a>
                    <img
                      src={logo}
                      alt='Logo'
                      className={classes.logo}
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
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
        <List
          className={classes.drawerList}
          onClick={() => setDrawerOpen(false)}>
          <ListItem
            button={true}
            component='a'
            href='https://app.mysite.com/auth/signin'>
            <ListItemText>Sign in</ListItemText>
          </ListItem>
          <ListItem>
            <IconButton
              color='inherit'
              onClick={darkMode.toggle}
              style={{ opacity: 0.6 }}>
              {darkMode.value && <NightsStayIcon />}

              {!darkMode.value && <WbSunnyIcon />}
            </IconButton>
          </ListItem>
        </List>
      </Drawer>
    </Section>
  );
}

export default Navbar;