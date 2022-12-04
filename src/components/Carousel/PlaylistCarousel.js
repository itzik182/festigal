import { useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick, isDesktopLayout, arrowStyle } = props;
  return (
    <div
      style={{
        transform: 'rotate(180deg)',
        top: isDesktopLayout ? '-100px' : '225px',
        left: isDesktopLayout ? '107px' : '230px',
        ...arrowStyle,
      }}
      onClick={onClick}>
      <img src='./images/Group6737.png' alt='next arrow' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, isDesktopLayout, arrowStyle } = props;
  return (
    <div
      style={{
        top: isDesktopLayout ? '-100px' : '225px',
        left: isDesktopLayout ? '10px' : '150px',
        ...arrowStyle,
      }}
      onClick={onClick}>
      <img src='./images/Group6737.png' alt='prev arrow' />
    </div>
  );
}

const PlaylistCarousel = (props) => {
  // const [sliderInterval, setSliderInterval] = useState();
  const sliderRef = useRef();
  const { items, handleItemClick, isDesktopLayout = true } = props;

  const arrowStyle = {
    background:
      'transparent linear-gradient(180deg, #A2711D 0%, #FFF2AF 43%, #F7E99B 51%, #C7B01B 100%) 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 41px #A2711D',
    position: 'absolute',
    borderRadius: '50px',
    padding: '10px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true,
    swipeToSlide: true,
    swipe: isDesktopLayout ? false : true,
    nextArrow: (
      <SampleNextArrow isDesktopLayout={isDesktopLayout} arrowStyle={arrowStyle} />
    ),
    prevArrow: (
      <SamplePrevArrow isDesktopLayout={isDesktopLayout} arrowStyle={arrowStyle} />
    ),
  };

  return (
    <Box
      sx={{
        position: 'relative',
      }}>
      <Slider ref={(c) => (sliderRef = c)} {...settings}>
        {items.map((item, index) => {
          const { name, description, imageWeb } = item;

          return (
            <Box>
              <Box
                key={item.id || index}
                sx={{
                  display: 'flex !important',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: isDesktopLayout ? '0 40px' : '0 10px',
                }}
                // onClick={() => handleItemClick(item.link)}>
                onClick={() => handleItemClick(item)}>
                <img
                  src={imageWeb?.url}
                  alt={imageWeb?.alt}
                  style={{
                    cursor: 'pointer',
                    width: isDesktopLayout ? '300px' : '150px',
                    height: isDesktopLayout ? '300px' : '150px',
                    borderRadius: '15px',
                  }}
                />
                <img
                  src='./images/Polygon5.png'
                  alt='play'
                  style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    width: isDesktopLayout ? 'auto' : '50px',
                  }}
                />
              </Box>
              <Box
                sx={{
                  textAlign: 'center',
                  marginTop: '10px',
                  font: isDesktopLayout
                    ? 'normal normal normal 23px/28px Noto Sans Hebrew'
                    : 'normal normal normal 14px/20px Noto Sans Hebrew',
                }}>
                <Box>{name}</Box>
                <Box>{description}</Box>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default PlaylistCarousel;
