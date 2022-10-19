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

  const router = useRouter();
  const { pathname, query } = router;
  const { id } = query;

  // const escapeRegExpMatch = function (s) {
  //   return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  // };
  // const isExactMatch = (str, match) => {
  //   return new RegExp(`\\b${escapeRegExpMatch(match)}\\b`).test(str);
  // };

  // const selected = item.ref.includes(id) || (item.ref.length > 1 && pathname.substring(1).includes(item.ref.substring(1)));

  return (
    <ListItem
      button
      sx={{
        '.MuiListItemText-root': {
          // color: selected && '#011434',
        },
        textAlign: 'center',
        marginTop: '30px !important',
        // '&:hover': {
        //   background: '#f5f8ac',
        //   '.MuiListItemText-root': {
        //     color: '#011434',
        //   },
        // },
      }}>
      <Link href={`/#${link}`}>
        <a
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
