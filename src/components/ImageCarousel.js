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

const ImageCarousel = (props) => {
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

  const handleItemClick = (item) => {
    alert(item.name);
  };

  return (
    <Box>
      <Slider {...settings}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={
              {
                //   width: '627px',
                //   background:
                //     'transparent url(./images/FRAME.png) center center no-repeat',
              }
            }
            onClick={() => handleItemClick(item)}>
            <Box
              sx={{
                position: 'relative',
                width: '500px',
                height: '748px',
                marginTop: index % 2 ? '90px' : 0,
                background:
                  'transparent url(./images/FRAME.png) center center no-repeat',
              }}>
              <img
                //   width={'168px'}
                src={item.url}
                style={{
                  outline: '0 !important',
                  position: 'absolute',
                  top: '107px',
                  right: '30px',
                  left: '0',
                  margin: 'auto',
                }}
              />
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                marginTop: '-60px',
                color: '#FFFFFF',
                textShadow: '0px 3px 0px #000000c4',
                fontSize: '38px',
                fontWeight: '800',
              }}>
              {item.name}
            </Box>
          </Box>
        ))}

        {/* <Box sx={{ width: '627px', position: 'relativ' }}>
          <img
            src={'./images/Group6802.png'}
            style={{ outline: '0 !important', marginTop: '90px' }}
          />
          <Box
            sx={{
              positions: 'absolute',
              top: '0',
            }}>
            אנה זק
          </Box>
        </Box>
        <Box sx={{ width: '627px' }}>
          <img
            src={'./images/Group6798.png'}
            style={{ outline: '0 !important' }}
          />
        </Box>
        <Box sx={{ width: '627px' }}>
          <img
            src={'./images/Group6796.png'}
            style={{ outline: '0 !important', marginTop: '90px' }}
          />
        </Box>
        <Box sx={{ width: '627px' }}>
          <img
            src={'./images/Group6802.png'}
            style={{ outline: '0 !important' }}
          />
        </Box>
        <Box sx={{ width: '627px' }}>
          <img
            src={'./images/Group6798.png'}
            style={{ outline: '0 !important', marginTop: '90px' }}
          />
        </Box>
        <Box sx={{ width: '627px' }}>
          <img
            src={'./images/Group6796.png'}
            style={{ outline: '0 !important' }}
          />
        </Box> */}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
