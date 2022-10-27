import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import GameCarousel from '../Carousel/GameCarousel';
import GameBlock from 'components/GameBlock';

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
    '&.mobile': {
      padding: '55px 0px',
    },
  },
}));

function GamesSection(props) {
  const classes = useStyles();
  const { items, mainData, isDesktopLayout = true } = props;

  return (
    <Section id='games' className={classes.section}>
      <Box className={`${classes.container} ${isDesktopLayout ? '' : 'mobile'}`}>
        <Box
          sx={{
            color: '#000',
            fontSize: isDesktopLayout ? '24px' : '25px',
            letterSpacing: isDesktopLayout ? 'normal' : '1.7px',
            fontFamily: 'GveretLevinAlefAlefAlef',
          }}>
          {mainData.gamesTitle}
        </Box>
        <Box
          sx={{
            color: '#2D555B',
            fontSize: isDesktopLayout ? '73px' : '35px',
            fontWeight: isDesktopLayout ? 'normal' : 'bold',
            marginBottom: isDesktopLayout ? '130px' : '30px',
          }}>
          {mainData.gamesText}
        </Box>
        <Box>
          {isDesktopLayout ? <GameCarousel items={items} /> : <GameBlock items={items} />}
        </Box>
      </Box>
    </Section>
  );
}

export default GamesSection;
