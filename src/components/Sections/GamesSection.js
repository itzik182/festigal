import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import GameCarousel from '../Carousel/GameCarousel';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
  },
  container: {
    background:
      'transparent url(./background/crown-bg.png) 0% 0% repeat padding-box',
    padding: '150px 30px',
    color: '#FFFFFF',
    textAlign: 'center',
  },
}));

function GamesSection(props) {
  const classes = useStyles();
  const { items, mainData } = props;

  return (
    <Section id='games' className={classes.section}>
      <Box className={classes.container}>
        <Box
          sx={{
            color: '#000',
            fontSize: '24px',
            fontFamily: 'GveretLevinAlefAlefAlef',
          }}>
          {mainData.gamesTitle}
        </Box>
        <Box
          sx={{
            color: '#2D555B',
            fontSize: '73px',
            marginBottom: '130px',
          }}>
          {mainData.gamesText}
        </Box>
        <Box>
          <GameCarousel items={items} />
        </Box>
      </Box>
    </Section>
  );
}

export default GamesSection;
