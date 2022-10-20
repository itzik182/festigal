import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import TouchCarousel from 'react-touch-carousel'
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
// import dynamic from 'next/dynamic';
// import { useState } from 'react';

// const { default: Carousel } = dynamic(
//  () => require('@brainhubeu/react-carousel'),
//  { ssr: false },
// );

const ImageNews = (props) => {
  const { items } = props;

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  const handleItemClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '150px 0 0',
      }}>
      {items.map((item, index) => (
        <Box
          onClick={() => handleItemClick(item.link)}
          key={index}
          sx={{
            marginBottom: '25px',
            marginLeft: '12px',
            marginRight: '12px',
            cursor: 'pointer',
            // marginRight: '15px',
            // position: 'relative',
            // width: '610px',
            // height: '860px',
            marginTop: index === 1 || index === 4 ? '-90px' : 0,
            // background: `transparent url(${item.url}) center center no-repeat`,
          }}>
          <img
            src={item.imageWeb?.url}
            title={item.imageWeb?.title}
            alt={item.imageWeb?.alt}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ImageNews;
