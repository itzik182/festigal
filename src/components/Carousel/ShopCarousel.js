import { useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import GoldButton from 'components/GoldButton';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ShopCarousel = (props) => {
  const [sliderInterval, setSliderInterval] = useState();
  const sliderRef = useRef();
  const {
    items,
    festigalStorUnderItemText,
    shopFromPackageText,
    isDesktopLayout = true,
  } = props;

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
    }, 300);
  };

  const handleItemClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        padding: '70px 0 0',
      }}>
      <Slider ref={(c) => (sliderRef = c)} {...settings}>
        {items.map((item, index) => {
          const { id, name, link, imageWeb, isFromPackage } = item;
          return (
            <Box
              key={id || index}
              sx={{
                display: 'flex !important',
                // alignItems: 'center',
                justifyContent: 'center',
                height: isDesktopLayout ? '292px' : 'auto',
                // height: isDesktopLayout ? 'auto' : 'auto',
                margin: isDesktopLayout ? '0 70px' : '0 30px',
                '&:hover .itemTitle': {
                  // display: 'block',
                  opacity: '1',
                },
              }}>
              <Box>
                <img
                  onClick={() => handleItemClick(link)}
                  src={imageWeb?.url}
                  alt={imageWeb?.alt}
                  style={{
                    cursor: 'pointer',
                    height: '182px',
                  }}
                />
              </Box>
              {isDesktopLayout && name && (
                <Box
                  sx={{
                    display: 'block',
                    opacity: '0',
                    position: 'absolute',
                    top: '160px',
                    transition: 'all 0.2s ease-in-out 0.1s',
                  }}
                  className='itemTitle'>
                  <span
                    style={{
                      font: 'normal normal normal 20px/32px GveretLevinAlefAlefAlef',
                      position: 'absolute',
                      width: '220px',
                      height: '33px',
                      textAlign: 'center',
                      color: '#2a94a2',
                      top: isFromPackage ? '38px' : '48px',
                      left: '27px',
                      direction: 'rtl',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      // transform: 'rotate(347deg)',
                    }}>
                    {/* {festigalStorUnderItemText} */}
                    {name}
                  </span>
                  {isFromPackage && (
                    <span
                      style={{
                        position: 'absolute',
                        textAlign: 'center',
                        top: '65px',
                        left: '75px',
                        font: 'normal normal bold 13px/22px Noto Sans Hebrew',
                        letterSpacing: '-0.29px',
                        color: '#000000',
                      }}>
                      {shopFromPackageText}
                    </span>
                  )}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '90px',
                      left: '87px',
                    }}>
                    <GoldButton
                      link={link}
                      text={'לקניה'}
                      isBold
                      buttonStyle={{ padding: '5px 30px', fontSize: '16px' }}
                    />
                  </Box>
                  <img
                    src='./images/Group6791.svg'
                    alt='circle'
                    style={{
                      width: '260px',
                      height: '125px',
                    }}
                  />
                </Box>
              )}
            </Box>
          );
        })}
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
            top: '0',
            right: '0',
            height: '100%',
            width: '8%',
          }}
          onMouseLeave={() => stopSlide()}
          onMouseOver={() => startSlide(true)}></Box>
      )}
    </Box>
  );
};

export default ShopCarousel;
