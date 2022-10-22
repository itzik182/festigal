import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Box from '@material-ui/core/Box';

export const MenuItem = (props) => {
  const { item, handleItemClick, isDrawerOpen } = props;
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
        marginBottom: '25px !important',
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
          {image && <img src={url} title={title} alt={alt} />}

          <Box
            sx={{
              color: '#fff',
              fontSize: '29px',
              marginTop: '-15px',
            }}>
            {text}
          </Box>
        </a>
      </Link>
    </ListItem>
  );
};