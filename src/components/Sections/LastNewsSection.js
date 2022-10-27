import React from 'react';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
// import SectionHeader from 'components/SectionHeader';
import ImageNews from 'components/ImageNews';
import SocialIcons from 'components/SocialIcons';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
  },
  container: {
    background: '#fff',
    padding: '100px 195px 130px',
    '&.mobile': {
      padding: '50px 0px',
    },
  },
}));

function LastNewsSection(props) {
  const classes = useStyles();
  const { items, mainData, socialIcons, isDesktopLayout = true } = props;

  if (!items) {
    return <></>;
  }

  return (
    <Section id='last-news' className={classes.section}>
      <Box
        className={`${classes.container} ${isDesktopLayout ? '' : 'mobile'}`}>
        <Box
          sx={{
            padding: isDesktopLayout ? '0' : '0 40px',
            color: '#000000',
            fontSize: isDesktopLayout ? '31px' : '25px',
            textAlign: 'center',
            fontFamily: 'GveretLevinAlefAlefAlef',
            lineHeight: isDesktopLayout ? '0.9' : '1.5',
            letterSpacing: '1.74px',
          }}>
          {mainData.lastNewsText}
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            color: '#2D555B',
            fontSize: isDesktopLayout ? '73px' : '35px',
            fontFamily: 'Noto Sans Hebrew',
            fontWeight: '900',
            fontStyle: 'normal',
            marginTop: '20px',
          }}>
          {mainData.lastNewsTitle}
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            padding: '50px 0 25px',
          }}>
          <SocialIcons
            items={socialIcons}
            isUseOriginalSize={true}
            style={{ backgroundColor: '#2D555B', margin: '0 15px' }}
          />
        </Box>
        <ImageNews items={items} />
      </Box>
    </Section>
  );
}

export default LastNewsSection;
