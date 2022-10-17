import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import ImageCarousel from './ImageCarousel';

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
    backgroundImage: `linear-gradient(
      180deg,
      hsl(187deg 50% 13%) 0%,
      hsl(186deg 52% 13%) 9%,
      hsl(186deg 54% 13%) 18%,
      hsl(185deg 55% 14%) 27%,
      hsl(185deg 57% 14%) 36%,
      hsl(185deg 60% 14%) 45%,
      hsl(186deg 63% 14%) 55%,
      hsl(186deg 66% 14%) 64%,
      hsl(185deg 73% 15%) 73%,
      hsl(184deg 81% 15%) 82%,
      hsl(183deg 91% 16%) 91%,
      hsl(181deg 100% 16%) 100%
    )`,
    padding: '0',
  },
  container: {
    background:
      'transparent url(./background/crown-bg.png) 0% 0% repeat padding-box',
    padding: '10px 0 30px',
  },
  containerA: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
}));

function ThirdSection(props) {
  const classes = useStyles();

  const items = [
    {url: './images/cap-1.png', name: 'אנה זק'},
    {url: './images/cap-2.png', name: 'אליאנה תדהר'},
    {url: './images/cap-3.png', name: 'אגם בוחבוט'},
    {url: './images/cap-4.png', name: 'אנה זק'},
    {url: './images/cap-1.png', name: 'אנה זק'},
    {url: './images/cap-2.png', name: 'אנה זק'},
    {url: './images/cap-3.png', name: 'אנה זק'},
    {url: './images/cap-4.png', name: 'אנה זק'},
  ]

  return (
    <Section className={classes.section}>
      <Box className={classes.container}>
        <ImageCarousel items={items} />
      </Box>
    </Section>
  );
}

export default ThirdSection;
