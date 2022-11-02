import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import { ShareSocialButton } from 'components/ShareSocialButton';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
    width: '100%',
  },
  container: {
    background:
      'transparent linear-gradient(117deg, #950291 0%, #3D1D58 100%) 0% 0% no-repeat padding-box',
    padding: '110px 0 0',
    textAlign: 'right',
    '&.mobile': {
      padding: '0px 0 0',
      minHeight: '550px',
      overflow: 'hidden',
    },
  },
}));

function AllFestigalsSection(props) {
  const classes = useStyles();
  const [siteUrl, setSiteUrl] = useState();

  useEffect(() => {
    const location = window?.location?.origin;
    setSiteUrl(location);
  });

  const { socialIcons, mainData, isDesktopLayout } = props;
  const sectionId = 'all-festigals';
  const shareUrl = `${siteUrl}/#${sectionId}`;

  return (
    <Section id={sectionId} className={classes.section}>
      <Box
        className={`${classes.container} ${isDesktopLayout ? '' : 'mobile'}`}>
          <ShareSocialButton
              sx={{
                position: 'absolute',
                top: isDesktopLayout ? '10%' : '2%',
                left: '4%',
              }}
              socialIcons={socialIcons}
              shareUrl={shareUrl}
              isDesktopLayout={isDesktopLayout}
            />
        <Box
          sx={{
            background: isDesktopLayout
              ? "transparent url('images/my_back.svg') -15% 0% no-repeat padding-box"
              : 'url("images/my_back.svg") 0% 10% / contain no-repeat padding-box padding-box transparent',
            mixBlendMode: 'overlay',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundPositionX: '-15px',
          }}></Box>
        <Box
          sx={{
            position: 'absolute',
            top: isDesktopLayout ? '170px' : '60px',
            left: isDesktopLayout ? '55px' : '18px',
            font: isDesktopLayout ? 'normal normal bold 49px/54px Noto Sans Hebrew' : 'bold 30px / 0px "Noto Sans Hebrew"',
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
            top: isDesktopLayout ? '380px' : '85px',
            left: isDesktopLayout ? '190px' : '20px',
            zIndex: '10',
          }}>
          <img
            src='./images/my_big.png'
            alt=''
            style={{
              height: 'auto',
              width: isDesktopLayout ? 'auto' : '330px',
            }}
          />
          <Box
            sx={{
              fontSize: isDesktopLayout ? '45px' : '21px',
              fontFamily: 'GveretLevinAlefAlefAlef',
              color: '#fff',
              margin: isDesktopLayout ? '20px 0 0' : '2px 13px 0 0',
              letterSpacing: isDesktopLayout ? 'normal' : '1.43px',
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
            bottom: isDesktopLayout ? '-6px' : '-215px',
            right: '-200px',
            zIndex: '1',
            width: isDesktopLayout ? '63%' : '150%',
          }}
        />
      </Box>
    </Section>
  );
}

export default AllFestigalsSection;
