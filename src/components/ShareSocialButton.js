import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import {ShareComponent} from './ShareComponent';

export const ShareSocialButton = (props) => {
  const [shareSocialButtonOpen, setShareSocialButtonOpen] = useState(false);
  const { socialIcons, color, shareUrl } = props;

  const handleItemClick = () => {
    setShareSocialButtonOpen(!shareSocialButtonOpen);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        direction: 'ltr',
      }}>
      <Box
        onClick={() => handleItemClick()}
        sx={{
          width: '100%',
          height: '55px',
          cursor: 'pointer',
          display: shareSocialButtonOpen ? 'none' : 'flex',
          backgroundColor: color || '#fff',
          WebkitMask: `url(./images/Group6324.svg) no-repeat 0% 0%`,
          mask: `url(./images/Group6324.svg) no-repeat 0% 0%`,
        }}></Box>
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
          cursor: 'pointer',
          display: !shareSocialButtonOpen ? 'none' : 'flex',
          marginRight: '20px',
          backgroundColor: '#fff',
          background: '#fff !important',
          width: '50px',
          height: '50px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50px',
        }}>
        <img src='./images/Path73.svg' alt='Share Social Button' />
      </Box>
      <Box
        sx={{
          display: !shareSocialButtonOpen ? 'none' : 'flex',
        }}>
          <ShareComponent shareUrl={shareUrl} />
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
