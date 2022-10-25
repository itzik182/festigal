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

const ActorCarousel = (props) => {
  const [sliderInterval, setSliderInterval] = useState();
  const sliderRef = useRef();
  const { items, handleItemClick } = props;

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
    swipe: true,
  };

  const stopSlide = () => {
    clearInterval(sliderInterval);
  };

  const startSlide = (isNext) => {
    const slide = isNext ? sliderRef.slickNext : sliderRef.slickPrev;
    slide();
    sliderInterval = setInterval(() => {
      slide();
    }, 100);
  };

  return (
    <Box
      sx={{
        position: 'relative',
      }}>
      <Slider ref={(c) => (sliderRef = c)} {...settings}>
        {items.map((item, index) => (
          <Box
            key={item.id ||index}
            onClick={() => handleItemClick(item)}>
            <Box
              sx={{
                position: 'relative',
                width: '500px',
                height: '748px',
                marginTop: index % 2 ? '90px' : 0,
                background:
                  'transparent url(./images/frame-4.png) center center no-repeat',
              }}>
              <img
                src={item?.imageSmall?.url}
                alt={item?.imageSmall?.alt}
                style={{
                  outline: '0 !important',
                  position: 'absolute',
                  top: '107px',
                  right: '30px',
                  left: '0',
                  margin: 'auto',
                  cursor: 'pointer',
                }}
              />
            </Box>
            <Box
              sx={{
                textAlign: 'center',
                marginTop: '-80px',
                color: '#FFFFFF',
                textShadow: '0px 3px 0px #000000c4',
                font: 'normal normal 800 38px/72px Noto Sans Hebrew',
                letterSpacing: "-0.8px",
              }}>
              {item.name}
            </Box>
          </Box>
        ))}
      </Slider>
      <Box
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          width: '8%',
        }}
        onMouseLeave={() => stopSlide()}
        onMouseOver={() => startSlide(false)}></Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50px',
          right: '0',
          height: '93%',
          width: '8%',
        }}
        onMouseLeave={() => stopSlide()}
        onMouseOver={() => startSlide(true)}></Box>
    </Box>
  );
};

export default ActorCarousel;
