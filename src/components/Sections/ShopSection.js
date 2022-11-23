import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import Vimeo from '@u-wave/react-vimeo';
import GoldButton from 'components/GoldButton';
import { ShareSocialButton } from '../ShareSocialButton';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
    width: '100%',
  },
  container: {
    // background:
    //   'transparent url(./background/crown-bg.png) 0% 0% repeat padding-box',
    // padding: '10px 0 40px',
    // '&.mobile': {
    //   padding: '40px 0',
    // },
  },
}));

const ShopSection = (props) => {
  const classes = useStyles();
  const [siteUrl, setSiteUrl] = useState();

  useEffect(() => {
    const location = window?.location?.origin;
    setSiteUrl(location);
  });

  const { items, socialIcons, mainData, isDesktopLayout } = props;
  const { festigalStorText, shopVideo, shopVideoMobile } = mainData;
  const sectionId = 'store';

  if (!items) {
    return <></>;
  }

  return (
    <Section id={sectionId} className={classes.section}>
      <Box
        className={`${classes.container} ${isDesktopLayout ? '' : 'mobile'}`}>
        <Box>
          {isDesktopLayout && (
            <Vimeo
              video={shopVideo?.url}
              showTitle={false}
              controls={true}
              loop={true}
              autoplay={true}
              playsInline={true}
              height='1000px'
              width={'100%'}
              background={true}
              responsive={true}
              style={{
                margin: '0px auto',
                position: 'relative',
                width: '100%',
              }}
            />
          )}
          {!isDesktopLayout && (
            <Vimeo
              video={shopVideoMobile?.url}
              showTitle={false}
              loop={true}
              controls={true}
              autoplay={false}
              playsInline={true}
              height='796px'
              width={'100%'}
              background={true}
              responsive={true}
              style={{
                margin: '0px auto',
                position: 'relative',
                width: '100%',
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            margin: isDesktopLayout ? '0 auto' : '0 auto',
            padding: '15px 0px 0px',
            position: 'absolute',
            background: '#F1ECE4 0% 0% no-repeat padding-box',
            boxShadow: '0px 20px 10px #00000029',
            width: isDesktopLayout ? '700px' : '80%',
            height: isDesktopLayout ? '300px' : '240px',
            borderRadius: '30px',
            top: '30px',
            left: '0',
            right: '0',
            opacity: '1',
          }}>
          <img
            style={{
              width: isDesktopLayout ? 'auto' : 'inherit',
            }}
            src={
              isDesktopLayout ? './images/mystore.png' : './images/mystore.png'
            }
          />
          <Box
            sx={{
              color: '#000000',
              fontFamily: 'GveretLevinAlefAlefAlef',
              fontSize: '31px',
            }}>
            {festigalStorText}
          </Box>
          <Box
            sx={{
              width: isDesktopLayout ? '255px' : '206px',
              height: '70px',
              textAlign: 'center',
              margin: isDesktopLayout ? '30px auto 0' : '15px auto 0px',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
            <GoldButton
              isDesktopLayout={isDesktopLayout}
              text={'COMING SOON'}
              isBold
              buttonStyle={
                !isDesktopLayout && { padding: '8px 0', fontSize: '20px' }
              }
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default ShopSection;
