import { useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        transform: 'rotate(180deg)',
        background:
          'transparent linear-gradient(180deg, #A2711D 0%, #FFF2AF 43%, #F7E99B 51%, #C7B01B 100%) 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 41px #A2711D',
        position: 'absolute',
        top: '-100px',
        left: '107px',
        borderRadius: '50px',
        padding: '10px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={onClick}>
      <img src='./images/Group6737.png' alt='next arrow' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      style={{
        background:
          'transparent linear-gradient(180deg, #A2711D 0%, #FFF2AF 43%, #F7E99B 51%, #C7B01B 100%) 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 41px #A2711D',
        position: 'absolute',
        top: '-100px',
        left: '10px',
        borderRadius: '50px',
        padding: '10px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={onClick}>
      <img src='./images/Group6737.png' alt='prev arrow' />
    </div>
  );
}

const PlaylistCarousel = (props) => {
  // const [sliderInterval, setSliderInterval] = useState();
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
    arrows: true,
    swipeToSlide: true,
    swipe: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  // const stopSlide = () => {
  //   clearInterval(sliderInterval);
  // };

  // const startSlide = (isNext) => {
  //   const slide = isNext ? sliderRef.slickNext : sliderRef.slickPrev;
  //   slide();
  //   sliderInterval = setInterval(() => {
  //     slide();
  //   }, 100);
  // };

  // const handleItemClick = (link) => {
  //   window.open(link, '_blank');
  // };

  return (
    <Box
      sx={{
        position: 'relative',
      }}>
      <Slider ref={(c) => (sliderRef = c)} {...settings}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex !important',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 40px',
            }}
            // onClick={() => handleItemClick(item.link)}>
            onClick={() => handleItemClick(item)}>
            <img
              src={item?.imageWeb?.url}
              alt={item?.imageWeb?.alt}
              style={{
                cursor: 'pointer',
              }}
            />
            <img
              src='./images/Polygon5.png'
              alt='play'
              style={{
                position: 'absolute',
                cursor: 'pointer',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default PlaylistCarousel;
