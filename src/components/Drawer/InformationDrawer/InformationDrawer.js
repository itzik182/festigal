import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@material-ui/core/Box';
import { ShowItemList } from './ShowItemList';
import { FaqItemList } from './FaqItemList';
import CloseButton from '../CloseButton';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '0 80px 30px',
    color: '#fff',
    fontFamily: 'Noto Sans Hebrew',
    '&.mobile': {
      padding: '0 12px 50px',
    },
    '&a': {
      color: '#06A6BB !important',
      textDecoration: 'underline',
    }
  },
  title: {
    fontSize: '35px',
    padding: '45px 0 20px',
    '&.mobile': {
      fontSize: '22px',
    },
  },
  description: {
    fontSize: '18px',
    width: '80%',
    '&.mobile': {
      width: '100%',
    },
  },
}));

export const InformationDrawer = (props) => {
  const classes = useStyles();
  const {
    ticketsInformationData,
    showsItems,
    faqItems,
    ticketsInformationText,
    arrivalText,
    drawerOpen,
    setDrawerOpen,
    isDesktopLayout = true,
  } = props;

  const {
    id,
    ticketTitle,
    ticketDescription,
    faqTitle,
    faqDescription,
    accessibilityTitle,
    accessibilityDescription,
    informationTitle,
    informationDescription,
  } = ticketsInformationData;

  return (
    <Drawer
      anchor='left'
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      sx={{
        '.MuiPaper-root': {
          background:
            'transparent linear-gradient(180deg, #058E9C 0%, #03474E 100%) 0% 0% no-repeat padding-box',
          boxShadow: '-23px 3px 22px #00000073',
          // minWidth: '60%',
          width: isDesktopLayout ? '1100px' : '100%',
        },
      }}>
      <CloseButton
        setDrawerOpen={setDrawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
      <Box className={`${classes.main} ${isDesktopLayout ? '' : 'mobile'}`}>
        <Box className={`${classes.title} ${isDesktopLayout ? '' : 'mobile'}`}>
          {ticketTitle}
        </Box>
        <Box className={classes.description}>{ticketDescription}</Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '30px',
            flexDirection: isDesktopLayout ? 'row' : 'column',
          }}>
          <ShowItemList
            ticketsInformationText={ticketsInformationText}
            items={showsItems}
            arrivalText={arrivalText}
            isDrawerOpen={drawerOpen}
            isDesktopLayout={isDesktopLayout}
          />
        </Box>
        {/* <Box className={classes.title}>{faqTitle}</Box>
        <Box
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: faqDescription }}></Box>
          <Box
          sx={{
            marginTop: '30px',
          }}>
          <FaqItemList
            ticketsInformationText={ticketsInformationText}
            items={faqItems}
            isDrawerOpen={drawerOpen}
          />
        </Box> */}
        <Box className={classes.title}>{accessibilityTitle}</Box>
        <Box
          className={`${classes.description} ${
            isDesktopLayout ? '' : 'mobile'
          }`}>
            <Box
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: accessibilityDescription }}></Box>
          {/* {accessibilityDescription} */}
        </Box>
        {/* <Box className={classes.title}>{informationTitle}</Box>
        <Box
          className={`${classes.description} ${
            isDesktopLayout ? '' : 'mobile'
          }`}>
          {informationDescription}
        </Box> */}
      </Box>
    </Drawer>
  );
};
