import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import ImageNews from '../ImageNews';

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
    backgroundImage: 'linear-gradient(117deg, #950291, #3d1d58 55%)',
    padding: '150px 0 30px',
    textAlign: 'right',
  },
  containerA: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
}));

function AllFestigalsSection(props) {
  const classes = useStyles();

  return (
    <Section id='friends' className={classes.section}>
      <Box className={classes.container}>
      <img src='./images/Image34.png' alt='' title='' style={{
        width: '50%',
        height: 'auto'
      }} />
      </Box>
    </Section>
  );
}

export default AllFestigalsSection;
