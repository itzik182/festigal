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
  },
}));

function ShopSection(props) {
  const classes = useStyles();
  const { items, mainData } = props;

  if (!items) {
    return <></>;
  }

  const itemsUp = items?.filter((item) => item.isDisplayUp);
  const itemsDown = items?.filter((item) => !item.isDisplayUp);

  return (
    <Section id='store' className={classes.section}>
      <Box className={classes.container}>
        <ShopCarousel items={itemsUp} />
        <Box
          sx={{
            textAlign: 'center',
            margin: '3% 0px 0',
          }}>
          <img
            //   width={'168px'}
            src={'./images/mystore.png'}
            style={{}}
          />
          <Box
            sx={{
              fontFamily: 'GveretLevinAlefAlefAlef',
              fontSize: '31px',
              // marginTop: '20px',
            }}>
            {mainData.festigalStorText}
          </Box>
          <Box
            sx={{
              width: '255px',
              height: '70px',
              textAlign: 'center',
              margin: '67px auto 0',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              }
            }}>
            <GoldButton text={'COMING SOON'} />
          </Box>
        </Box>
        <ShopCarousel items={itemsDown} />
      </Box>
    </Section>
  );
}

export default ShopSection;
