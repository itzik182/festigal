import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import ShopCarousel from '../Carousel/ShopCarousel';
import GoldButton from 'components/GoldButton';
import { ShareSocialButton } from '../ShareSocialButton';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
    width: '100%',
  },
  container: {
    background:
      'transparent url(./background/crown-bg.png) 0% 0% repeat padding-box',
    padding: '10px 0 40px',
    '&.mobile': {
      padding: '40px 0',
    },
  },
}));

const ShopSection = (props) => {
  const classes = useStyles();
  const { items, socialIcons, mainData, isDesktopLayout } = props;
  const { festigalStorText, festigalStorUnderItemText, shopFromPackageText } =
    mainData;
  const sectionId = 'store';

  if (!items) {
    return <></>;
  }

  const itemsUp = items?.filter((item) => item.isDisplayUp);
  const itemsDown = items?.filter((item) => !item.isDisplayUp);
  const shareUrl = `${process.env.BASE_URL}#${sectionId}`;

  return (
    <Section id={sectionId} className={classes.section}>
      <Box
        className={`${classes.container} ${isDesktopLayout ? '' : 'mobile'}`}>
        <ShopCarousel
          items={itemsUp}
          shopFromPackageText={shopFromPackageText}
          festigalStorUnderItemText={festigalStorUnderItemText}
          isDesktopLayout={isDesktopLayout}
        />
        <Box
          sx={{
            textAlign: 'center',
            margin: isDesktopLayout ? '2% 0px 0' : '50px 0px',
          }}>
          <ShareSocialButton
            sx={{
              position: 'relative',
              left: '49%',
              marginBottom: '15px',
            }}
            isVertical={isDesktopLayout ? false : true}
            buttonColor={'#000'}
            socialIcons={socialIcons}
            shareUrl={shareUrl}
            isDesktopLayout={isDesktopLayout}
          />
          <img
            src={
              isDesktopLayout
                ? './images/mystore.png'
                : './mobile/images/mystore.png'
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
              margin: isDesktopLayout ? '67px auto 0' : '30px auto 0px',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}>
            <GoldButton
              text={'COMING SOON'}
              isBold
              buttonStyle={
                !isDesktopLayout && { padding: '8px 0', fontSize: '20px' }
              }
            />
          </Box>
        </Box>
        <ShopCarousel
          items={itemsDown}
          shopFromPackageText={shopFromPackageText}
          festigalStorUnderItemText={festigalStorUnderItemText}
          isDesktopLayout={isDesktopLayout}
        />
      </Box>
    </Section>
  );
};

export default ShopSection;
