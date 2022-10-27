import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ActorCarousel = (props) => {
  const [sliderInterval, setSliderInterval] = useState();
  const sliderRef = useRef();
  const { items, handleItemClick, isDesktopLayout = true } = props;

  const settings = {
    className: 'slider variable-width',
    // className: 'center',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: true,
    arrows: false,
    swipeToSlide: isDesktopLayout ? true : true,
    swipe: isDesktopLayout ? true : true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 0,
    cssEase: 'linear',
    //draggable: false,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
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

  const renderSlides = items.map((item, index) => {
    const { id, name, imageSmall, imageSmallMobile } = item;
    const currentImageSmall = isDesktopLayout ? imageSmall : imageSmallMobile;
    // console.log('isDesktopLayout', isDesktopLayout);
    // console.log('currentImageSmall', currentImageSmall);

    return (
      <Box key={id || index} >
        <Box
          sx={{
            position: 'relative',
            width: isDesktopLayout ? '500px' : '333.2px',
            height: isDesktopLayout ? '748px' : '583px',
            marginTop: isDesktopLayout && index % 2 ? '90px' : 0,
            background: isDesktopLayout
              ? 'transparent url(./images/frame-4.png) center center no-repeat'
              : 'transparent url(./mobile/images/frame-4.png) center center no-repeat',
          }}>
          <Box
            sx={{
              outline: '0 !important',
              position: 'absolute',
              top: isDesktopLayout ? '107px' : '79px',
              transition: 'all .1s ease-in-out .1s',
              // right: '30px',
              left: isDesktopLayout ? '80px' : '45px',
              margin: 'auto',
              cursor: 'pointer',
              '&:hover': {
                top: '81px',
                transform: 'scale(1.1)',
              },
            }}>
            <Image
              width={currentImageSmall?.width}
              height={currentImageSmall?.height}
              src={currentImageSmall?.url}
              alt={currentImageSmall?.alt}
            />
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            marginTop: '-80px',
            color: '#FFFFFF',
            textShadow: '0px 3px 0px #000000c4',
            font: isDesktopLayout
              ? 'normal normal 800 38px/72px Noto Sans Hebrew'
              : 'normal normal 800 24px/72px Noto Sans Hebrew',
            letterSpacing: '-0.8px',
          }}>
          {name}
        </Box>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        position: 'relative',
        maxHeight: isDesktopLayout ? 'auto' : '600px',
      }}>
      <Slider ref={(c) => (sliderRef = c)} {...settings}>
        {renderSlides}
      </Slider>
      {isDesktopLayout && (
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
      )}
      {isDesktopLayout && (
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
      )}
    </Box>
  );
};

export default ActorCarousel;
