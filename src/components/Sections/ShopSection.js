import React from 'react';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
// import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
// import SectionHeader from 'components/SectionHeader';
import ShopCarousel from '../Carousel/ShopCarousel';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
  },
  container: {
    background:
      'transparent url(./background/crown-bg.png) 0% 0% repeat padding-box',
    padding: '50px 0',
  },
}));

function ShopSection(props) {
  const classes = useStyles();
  const { items, mainData } = props;

  if (!items) {
    return <></>;
  }

  const itemsUp = items?.filter(item => item.isDisplayUp);
  const itemsDown = items?.filter(item => !item.isDisplayUp);

  return (
    <Section id='store' className={classes.section}>
      <Box className={classes.container}>
        <ShopCarousel items={itemsUp} />
        <Box
          sx={{
            textAlign: 'center',
            margin: '3% 0px',
          }}>
          <img
            //   width={'168px'}
            src={'./images/mystore.png'}
            style={{}}
          />
          <Box sx={{
            fontFamily: "GveretLevinAlefAlefAlef", 
            fontSize: "31px",
            marginTop: '20px',
          }}>
          {mainData.festigalStorText}
          </Box>
        </Box>
        <ShopCarousel items={itemsDown} />
      </Box>
    </Section>
  );
}

export default ShopSection;
