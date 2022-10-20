import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import ImageNews from 'components/ImageNews';
import SocialIcons from 'components/SocialIcons';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
  },
  container: {
    background: '#fff',
    padding: '100px 195px 130px',
  },
}));

function LastNewsSection(props) {
  const classes = useStyles();
  const { items, socialIcons } = props;

  if (!items) {
    return <></>;
  }

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
            fontFamily: 'Noto Sans Hebrew',
            fontWeight: '900',
            fontStyle: 'normal',
            marginTop: '20px',
          }}>
          החדשות האחרונות
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            padding: '50px 0 25px',
          }}>
          <SocialIcons
            items={socialIcons}
            isUseOriginalSize={false}
            color={'#2D555B'}
          />
        </Box>
        <ImageNews items={items} />
      </Box>
    </Section>
  );
}

export default LastNewsSection;
