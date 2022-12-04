import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ShareSocialButton } from 'components/ShareSocialButton';

const LastNewsCarousel = (props) => {
  const [sliderInterval, setSliderInterval] = useState();
  const sliderRef = useRef();
  const { items, socialIcons, isDesktopLayout = false } = props;

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    swipeToSlide: isDesktopLayout ? false : true,
    swipe: isDesktopLayout ? false : true,
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

  const handleItemClick = (link) => {
    window.open(link, '_blank');
  };
 items = items.slice(0, items.length-1);

  const renderSlides = items.map((item, index) => {
    const { id, name, link, imageWeb } = item;

    return (
      <Box key={id || index}>
        <Box
          sx={{
            position: 'relative',
            width: isDesktopLayout ? '500px' : '302px',
            height: isDesktopLayout ? '748px' : '435px',
            marginTop: index % 2 ? '45px' : 0,
            padding: '0 9px',
          }}>
          <Box
            sx={{
              margin: 'auto',
              cursor: 'pointer',
            }}>
            <ShareSocialButton
              sx={{
                position: 'absolute',
                left: '20px',
                top: '15px',
              }}
              socialIcons={socialIcons}
              shareUrl={link}
              isDesktopLayout={isDesktopLayout}
            />
            <Image
              loading={'eager'}
              onClick={() => handleItemClick(link)}
              width={imageWeb?.width}
              height={imageWeb?.height}
              src={imageWeb?.url}
              alt={imageWeb?.alt}
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

export default LastNewsCarousel;
