import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import ShopCarousel from '../Carousel/ShopCarousel';
import GoldButton from 'components/GoldButton';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
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

function ShopSection(props) {
  const classes = useStyles();
  const { items, mainData, isDesktopLayout } = props;
  const { festigalStorText, festigalStorUnderItemText } = mainData;

  if (!items) {
    return <></>;
  }

  const itemsUp = items?.filter((item) => item.isDisplayUp);
  const itemsDown = items?.filter((item) => !item.isDisplayUp);

  return (
    <Section id='store' className={classes.section}>
      <Box
        className={`${classes.container} ${isDesktopLayout ? '' : 'mobile'}`}>
        <ShopCarousel
          items={itemsUp}
          festigalStorUnderItemText={festigalStorUnderItemText}
          isDesktopLayout={isDesktopLayout}
        />
        <Box
          sx={{
            textAlign: 'center',
            margin: isDesktopLayout ? '3% 0px 0' : '50px 0px',
          }}>
          <img
            //   width={'168px'}
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
              // marginTop: '20px',
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
              style={!isDesktopLayout && { padding: '8px 0', fontSize: '20px' }}
            />
          </Box>
        </Box>
        <ShopCarousel
          items={itemsDown}
          festigalStorUnderItemText={festigalStorUnderItemText}
          isDesktopLayout={isDesktopLayout}
        />
      </Box>
    </Section>
  );
}

export default ShopSection;
