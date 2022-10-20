import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import PlaylistCarousel from '../Carousel/PlaylistCarousel';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
  },
  container: {
    // background: '#FFFFFF',
    margin: '0',
  },
  containerA: {
    background: '#021B23 0% 0% no-repeat padding-box',
    padding: '0',
    color: '#FFFFFF',
    textAlign: 'right',
    padding: '100px 11.193vw 150px',
  },
  mediumText: {
    fontSize: '2.312vw',
    fontFamily: 'Noto Sans Hebrew',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  rectangle: {
    boxShadow: '0px 0px 7px #FFD284',
    border: '1px solid #A2711D',
    borderRadius: '2px',
  },
}));

function MusicSection(props) {
  const classes = useStyles();
  const { items } = props;

  // const items = [
  //   { url: './images/Image-15.png', name: 'אנה זק' },
  //   { url: './images/Image-16.png', name: 'אנה זק' },
  //   { url: './images/Image-17.png', name: 'אליאנה תדהר' },
  //   { url: './images/Image-18.png', name: 'אגם בוחבוט' },
  //   { url: './images/Image-19.png', name: 'אנה זק' },
  //   { url: './images/Image-16.png', name: 'אנה זק' },
  //   { url: './images/Image-17.png', name: 'אנה זק' },
  //   { url: './images/Image-18.png', name: 'אנה זק' },
  // ];

  return (
    <Section id='playlists' className={classes.section}>
      <Box className={classes.container}>
        <Box
          sx={{
            height: '588px',
            padding: '200px 11.193vw 0',
            background:
              'transparent url(./background/image47.png) no-repeat padding-box',
          }}>
          <Box
            sx={{
              display: 'flex',
              marginBottom: '25px',
            }}>
            <Box
              sx={{
                color: '#fff',
              }}>
              <Box
                sx={{
                  fontSize: '1.524vw',
                  fontFamily: 'GveretLevinAlefAlefAlef',
                }}>
                שיר הפסטיגל 2022
              </Box>
              <Box
                sx={{
                  fontSize: '4.467vw',
                  fontFamily: 'Noto Sans Hebrew',
                  fontWeight: '800',
                  fontStyle: 'normal',
                }}>
                אני יכול הכל
              </Box>
              <Box
                className={classes.mediumText}
                sx={{
                  fontSize: '1.944vw',
                }}>
                עדן חסון ומשתתפי הפסטיגל
              </Box>
            </Box>
            <Box>
              <a href='https://www.youtube.com/watch?v=iCAKpASnFgw' target='_blank'>
              <img
                style={{
                  cursor: 'pointer',
                }}
                src='./images/play.png'
                alt='play'
              /></a>
            </Box>
          </Box>
          <Box className={classes.rectangle}></Box>
        </Box>
        <Box className={classes.containerA}>
          <Box
            className={classes.mediumText}
            sx={{
              fontSize: '2.312vw',
              padding: '0 0 50px',
            }}>
            פלייליסטים מכל הזמנים
          </Box>
          <Box>
            <PlaylistCarousel items={items} />
          </Box>
          <Box
            className={classes.mediumText}
            sx={{
              fontSize: '2.312vw',
              padding: '100px 0 50px',
            }}>
            הפודקאסט של הפסטיגל
          </Box>
          <Box>
            <PlaylistCarousel items={items} />
          </Box>
        </Box>
      </Box>
    </Section>
  );
}

export default MusicSection;
