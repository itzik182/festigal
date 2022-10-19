import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import ActorCarousel from '../Carousel/ActorCarousel';

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(3)}px`,
  },
  image: {
    margin: '0 auto',
    maxWidth: 570,
    display: 'block',
    height: 'auto',
    width: '100%',
  },
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
    padding: '0 213px',
  },
}));

function MusicSection(props) {
  const classes = useStyles();
  // const { items } = props;

  const items = [
    {url: './images/Image-15.png', name: 'אנה זק'},
    {url: './images/Image-16.png', name: 'אנה זק'},
    {url: './images/Image-17.png', name: 'אליאנה תדהר'},
    {url: './images/Image-18.png', name: 'אגם בוחבוט'},
    {url: './images/Image-19.png', name: 'אנה זק'},
    {url: './images/Image-16.png', name: 'אנה זק'},
    {url: './images/Image-17.png', name: 'אנה זק'},
    {url: './images/Image-18.png', name: 'אנה זק'},
  ]

  return (
    <Section id="playlists" className={classes.section}>
      <Box className={classes.container}>
        <Box
          sx={{
            height: '588px',
            background:
              'transparent url(./background/image47.png) no-repeat padding-box',
          }}></Box>
        <Box className={classes.containerA}>
          <Box>פלייליסטים מכל הזמנים</Box>
          <Box>
            <ActorCarousel items={items} />
          </Box>
          <Box>הפודקאסט של הפסטיגל</Box>
          <Box>
            <ActorCarousel items={items} />
          </Box>
        </Box>
      </Box>
    </Section>
  );
}

export default MusicSection;
