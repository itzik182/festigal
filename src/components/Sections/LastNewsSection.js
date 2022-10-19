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
    background: '#fff',
    padding: '150px 195px 130px',
  },
  containerA: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
}));

function LastNewsSection(props) {
  const classes = useStyles();
  const { items } = props;

  if (!items) {
    return <></>;
  }

  // const items = [
  //   { url: './images/Rectangle-1.png', name: 'אנה זק' },
  //   { url: './images/Rectangle-2.png', name: 'אליאנה תדהר' },
  //   { url: './images/Rectangle-3.png', name: 'אגם בוחבוט' },
  //   { url: './images/Rectangle-4.png', name: 'אנה זק' },
  //   { url: './images/Rectangle-5.png', name: 'אנה זק' },
  //   { url: './images/Rectangle-6.png', name: 'אנה זק' },
  // ];

  return (
    <Section id='last-news' className={classes.section}>
      <Box className={classes.container}>
        <Box
          sx={{
            color: '#000000',
            fontSize: '31px',
            textAlign: 'center',
            fontFamily: 'GveretLevinAlefAlefAlef',
            lineHeight: '0.9',
            letterSpacing: '1.74px',
          }}>
          כל מה שרציתם לדעת על הפסטיגל
        </Box>
        <Box
          sx={{
            color: '#2D555B',
            fontSize: '73px',
            fontWeight: '900',
            textAlign: 'center',
            fontFamily: "Noto Sans Hebrew",
                fontWeight: '900',
                fontStyle: 'normal',
          }}>
          החדשות האחרונות
        </Box>
        <Box
          sx={{
            textAlign: 'center',
          }}>
          social
        </Box>
        <ImageNews items={items} />
      </Box>
    </Section>
  );
}

export default LastNewsSection;
