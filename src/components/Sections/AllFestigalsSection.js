import React from 'react';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
// import SectionHeader from 'components/SectionHeader';
// import ImageNews from '../ImageNews';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
  },
  container: {
    background:
      'transparent linear-gradient(117deg, #950291 0%, #3D1D58 100%) 0% 0% no-repeat padding-box',
    padding: '110px 0 0px',
    textAlign: 'right',
  },
}));

function AllFestigalsSection(props) {
  const classes = useStyles();

  const { mainData } = props;

  return (
    <Section id='all-festigals' className={classes.section}>
      <Box className={classes.container}>
        <Box
          sx={{
            background:
              "transparent url('images/my_back.svg') -13% 0% no-repeat padding-box",
            mixBlendMode: 'overlay',
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}></Box>
        <Box
          sx={{
            position: 'absolute',
            top: '170px',
            left: '55px',
            font: 'normal normal bold 49px/54px Noto Sans Hebrew',
            letterSpacing: '1.08px',
            color: '#FFFFFF',
            textShadow: '0px 0px 14px #FFFFFF9C',
            transform: 'matrix(0.98, -0.21, 0.21, 0.98, 0, 0)',
          }}>
          {mainData.comingSoonText}
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '380px',
            left: '190px',
          }}>
          <img
            src='./images/my_big.png'
            alt=''
            style={{
              height: 'auto',
            }}
          />
          <Box
            sx={{
              fontSize: '45px',
              fontFamily: 'GveretLevinAlefAlefAlef',
              color: '#fff',
              marginTop: '20px',
            }}>
            {mainData.myFestigalWebsiteText}
          </Box>
        </Box>
        <img
          src='./images/Image34.png'
          alt=''
          style={{
            height: 'auto',
            position: 'relative',
            bottom: '-6px',
            right: '-200px',
            zIndex: '1',
            width: '63%',
          }}
        />
      </Box>
    </Section>
  );
}

export default AllFestigalsSection;
