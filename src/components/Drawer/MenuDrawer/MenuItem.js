import React from 'react';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import Box from '@material-ui/core/Box';

export const MenuItem = (props) => {
  const { item, handleItemClick, isDrawerOpen, isDesktopLayout } = props;
  const { image, text, link } = item;
  const { url, title, alt } = image;

  const isBlank = link.includes('http');

  return (
    <ListItem
      button
      sx={{
        '.MuiListItemText-root': {
          // color: selected && '#011434',
        },
        textAlign: 'center',
        marginBottom: '5px !important',
        padding: '10px 0 10px !important',
        // '&:hover': {
        //   background: '#f5f8ac',
        //   '.MuiListItemText-root': {
        //     color: '#011434',
        //   },
        // },
      }}>
      <Link href={link}>
        <a
          target={isBlank ? '_blank' : '_self'}
          onClick={() => handleItemClick()}
          style={{
            textDecoration: 'none',
          }}>
          {image && (
            <img
              src={url}
              title={title}
              alt={alt}
              style={{
                width: isDesktopLayout ? '100%' : `calc(${(image.width/100)*70}px)`,
              }}
            />
          )}
          <Box
            sx={{
              color: '#fff',
              fontSize: isDesktopLayout ? '29px' : '18pt',
              marginTop: '-15px',
            }}>
            {text}
          </Box>
        </a>
      </Link>
    </ListItem>
  );
};
