import { useRef, useState } from 'react';
import Box from '@material-ui/core/Box';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      }}>
      <Slider ref={(c) => (sliderRef = c)} {...settings}>
        {items.map((item, index) => (
          <Box
            key={item.id ||index}
            sx={{
              display: 'flex !important',
              alignItems: 'center',
              justifyContent: 'center',
              height: '340px',
              margin: '0 80px',
              '&:hover .itemTitle': {
                display: 'block',
              },
            }}
            onClick={() => handleItemClick(item.link)}>
            <Box>
              <img
                src={item?.imageWeb?.url}
                alt={item?.imageWeb?.alt}
                style={{
                  cursor: 'pointer',
                  height: '182px',
                }}
              />
            </Box>
            <Box
              sx={{ display: 'none', position: 'absolute', bottom: '5px' }}
              className='itemTitle'>
                <span
                style={{
                  fontFamily: 'GveretLevinAlefAlefAlef',
                  position: 'absolute',
                  width: "95px", 
                  textAlign: "center", 
                  color: "#2a94a2", 
                  top: "17px", 
                  left: "62px",
                  transform: 'rotate(347deg)',
                }}>
                חייבים את זה? קנו את זה עכשיו
              </span>
              <img
                src='./images/Group6791.svg'
                alt='circle'
                style={{
                  width: '210px',
                  height: '75px',
                }}
              />
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

export default ShopCarousel;
