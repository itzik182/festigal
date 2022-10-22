import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Box from '@material-ui/core/Box';
import BuyTicketButton from 'components/BuyTicketButton';

export const ShowItem = (props) => {
  const { item, handleItemClick, isDrawerOpen } = props;
  const {
    auditorium,
    city,
    date,
    isTicketsAvailable,
    buyTicketLink,
    locationLink,
  } = item;

  // const isBlank = link.includes('http');

  return (
    <Box
      sx={{
        background:
          'transparent linear-gradient(180deg, #9E7304 0%, #FFF2AF 29%, #F7E99B 87%, #C7851B 100%) 0% 0% no-repeat padding-box',
        boxShadow: '0px 10px 10px #00000029',
        textAlign: 'center',
        color: '#000',
        borderRadius: '10px',
        padding: '15px 10px',
      }}>
      <Box
        sx={{
          fontSize: '30px',
        }}>
        {date}
      </Box>
      <Box
        sx={{
          fontSize: '26px',
        }}>
        {city}
      </Box>
      <Box
        sx={{
          fontSize: '19px',
        }}>
        {auditorium}
      </Box>
      <Box sx={{
        margin: '10px 0',
      }}>
        <BuyTicketButton
          text={isTicketsAvailable ? 'הזמנת כרטיסים' : 'הכרטיסים אזלו'}
        />
      </Box>
      <Box
        sx={{
          fontSize: '14px',
          color: '#A2711D',
        }}>
        <Box>דרכי הגעה</Box>
        <Box>ל{auditorium}</Box>
      </Box>
    </Box>
  );
};
