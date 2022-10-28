import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { ShareComponent } from './ShareComponent';

export const ShareSocialButton = (props) => {
  const [shareSocialButtonOpen, setShareSocialButtonOpen] = useState(false);
  const [shareSocialButtonOpacity, setShareSocialButtonOpacity] =
    useState(false);
  const {
    socialIcons,
    buttonColor = '#fff',
    buttonSize = '30px',
    shareUrl,
    isDesktopLayout = true,
    isVertical = false,
    sx,
  } = props;

  const handleItemClick = () => {
    setShareSocialButtonOpen(!shareSocialButtonOpen);
    setTimeout(() => {
      setShareSocialButtonOpacity(!shareSocialButtonOpacity);
    }, 10);
  };

  return (
    <Box
      sx={{
        height: '50px',
        display: 'flex',
        direction: 'ltr',
        zIndex: '1000',
        ...sx,
      }}>
      <Box
        onClick={() => handleItemClick()}
        sx={{
          display: shareSocialButtonOpen ? 'none' : 'flex',
          marginRight: '10px',
          cursor: 'pointer',
          '& svg': {
            width: buttonSize,
            // height: buttonSize,
            fill: buttonColor,
          },
        }}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='34.585'
          height='40.837'
          viewBox='0 0 34.585 40.837'>
          <g
            id='Group_6324'
            data-name='Group 6324'
            transform='translate(656.927 -7.582)'>
            <g
              id='paper-plane-svgrepo-com'
              transform='translate(-679.821 7.582)'>
              <g
                id='Group_6320'
                data-name='Group 6320'
                transform='translate(22.894 0)'>
                <path
                  id='Path_73'
                  data-name='Path 73'
                  d='M55.716.18,24.254,20.115a2.92,2.92,0,0,0,.884,5.307l8.382,2L32.9,38.11a1.148,1.148,0,0,0,1.894.935l5.184-4.468,4.38,5.215a2.921,2.921,0,0,0,5.091-1.263l8-37.139A1.148,1.148,0,0,0,55.716.18ZM34.3,25.255l-8.632-2.064a.625.625,0,0,1-.19-1.138L50.55,6.169Zm1.045,10.285.351-6.058,2.8,3.339Zm11.86,2.506a.626.626,0,0,1-1.092.271L36.222,26.539,54.249,5.363Z'
                  transform='translate(-22.894 0)'
                />
              </g>
            </g>
          </g>
        </svg>
      </Box>
      {/* <Box
        onClick={() => handleItemClick()}
        sx={{
          backgroundSize: buttonSize,
          width: buttonSize,
          height: buttonSize,
          marginRight: '10px',
          cursor: 'pointer',
          display: shareSocialButtonOpen ? 'none' : 'flex',
          backgroundColor: buttonColor,
          WebkitMask: `url(./images/Group6324.svg) no-repeat 0% 0%`,
          mask: `url(./images/Group6324.svg) no-repeat 0% 0%`,
        }}></Box> */}
      {/* <img
        style={{
          cursor: 'pointer',
          display: shareSocialButtonOpen ? 'none' : 'flex',
        }}
        src='./images/Group6324.svg'
        alt='Share Social Button'
        onClick={() => handleItemClick()}
      /> */}
      <Box
        onClick={() => handleItemClick()}
        sx={{
          boxShadow: '0px 3px 6px #00000029',
          cursor: 'pointer',
          display: !shareSocialButtonOpen ? 'none' : 'flex',
          marginRight: '10px',
          backgroundColor: '#fff',
          minWidth: isDesktopLayout ? '50px' : '40px',
          minHeight: isDesktopLayout ? '50px' : '40px',
          maxHeight: isDesktopLayout ? '50px' : '40px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50px',
        }}>
        <img src='./images/Path73.svg' alt='Share Social Button' />
      </Box>
      <Box
        sx={{
          transition: 'opacity 0.5s ease-in-out 0s',
          display: !shareSocialButtonOpen ? 'none' : 'flex',
          opacity: !shareSocialButtonOpacity ? '0' : '1',
          height: isDesktopLayout ? '50px' : '40px',
          position: 'absolute',
          left: isDesktopLayout ? '60px' : '50px',
          width: 'max-content',
        }}>
        <ShareComponent
          shareUrl={shareUrl}
          isVertical={isVertical}
          isDesktopLayout={isDesktopLayout}
        />
        {/* {socialIcons
          .filter((icon) => icon.isDisplaySharePanel)
          .map((socialIcon) => {
            const { icon } = socialIcon;
            const { url, alt, title } = icon || {};
            return (
              <Box
                onClick={() => handleItemClick()}
                sx={{
                  cursor: 'pointer',
                  marginRight: '20px',
                  background: '#fff',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50px',
                }}>
                <img src={url} alt={alt} title={title} />
              </Box>
            );
          })} */}
      </Box>
    </Box>
  );
};
