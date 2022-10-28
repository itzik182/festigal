import { useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ShareSocialButton } from 'components/ShareSocialButton';

const GameCarousel = (props) => {
  const [sliderInterval, setSliderInterval] = useState();
  const sliderRef = useRef();
  const { items, socialIcons, isDesktopLayout } = props;

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

  const handleItemClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'relative',
      }}>
      <Slider ref={(c) => (sliderRef = c)} {...settings}>
        {items.map((item, index) => (
          <Box
            key={item.id || index}
            sx={{
              display: 'flex !important',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              // height: "340px",
              margin: '0 25px',
              color: '#000',
              cursor: 'pointer',
            }}>
            <Box
              sx={{
                position: 'relative',
              }}>
              <ShareSocialButton
                sx={{
                  position: 'absolute',
                  top: '10px',
                  left: '15px',
                }}
                socialIcons={socialIcons}
                shareUrl={item.link}
                isDesktopLayout={isDesktopLayout}
              />
              <img
                src={item?.imageWeb?.url}
                alt={item?.imageWeb?.alt}
                onClick={() => handleItemClick(item.link)}
              />
              {item.imageText && (
                <Box
                  sx={{
                    fontSize: '54px',
                    fontFamily: 'GveretLevinAlefAlefAlef',
                    position: 'absolute',
                    color: 'rgb(255, 255, 255)',
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    padding: '20px',
                    bottom: '0',
                  }}>
                  {item.imageText}
                </Box>
              )}
            </Box>
            <Box
              sx={{
                margin: '35px 0 0',
                fontSize: '36px',
                fontFamily: 'Noto Sans Hebrew',
                fontWeight: '800',
              }}>
              {item.firstTitle}
            </Box>
            <Box
              sx={{
                fontSize: '36px',
                fontFamily: 'Noto Sans Hebrew',
              }}>
              {item.firstName}
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
          top: '0',
          right: '0',
          height: '100%',
          width: '8%',
        }}
        onMouseLeave={() => stopSlide()}
        onMouseOver={() => startSlide(true)}></Box>
    </Box>
  );
};

export default GameCarousel;
