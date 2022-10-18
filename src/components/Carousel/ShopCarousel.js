import { useRef, useState } from 'react';
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

const ShopCarousel = (props) => {
  const [sliderInterval, setSliderInterval] = useState();
  const sliderRef = useRef();
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
    swipeToSlide: true,
    swipe: false,
  };

  const stopSlide = () => {
    clearInterval(sliderInterval);
  };

  const startSlide = (isNext) => {
    const slide = isNext ? sliderRef.slickNext : sliderRef.slickPrev;
    slide();
    sliderInterval = setInterval(() => {
      slide();
    }, 300);
  };

  const handleItemClick = (link) => {
    window.open(
      link,
      '_blank'
    );
  };

  return (
    <Box sx={{
      position: 'relative',
    }}>
      <Slider ref={(c) => (sliderRef = c)} {...settings}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={
              {
                display: "flex !important", 
                alignItems: "center", 
                justifyContent: "center", 
                height: "340px",
                margin: "0 100px",
              }
            }
            onClick={() => handleItemClick(item.link)}>
              <img
                //   width={'168px'}
                src={item?.image?.url}
                style={{
                  cursor: 'pointer',
                }}
              />
            </Box>
        ))}
      </Slider>
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          height: '100%',
          width: '8%',
        }}
        onMouseLeave={() => stopSlide()}
        onMouseOver={() => startSlide(false)}>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          right: '0',
          height: '100%',
          width: '8%',
        }}
        onMouseLeave={() => stopSlide()}
        onMouseOver={() => startSlide(true)}>
      </Box>
    </Box>
  );
};

export default ShopCarousel;
