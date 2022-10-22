import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@mui/material/Drawer';
import Box from '@material-ui/core/Box';
import { DrawerItemList } from './DrawerItemList';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '0 80px 30px',
    color: '#fff',
    fontFamily: 'Noto Sans Hebrew',
  },
  title: {
    fontSize: '35px',
    padding: '45px 0 20px',
  },
  description: {
    fontSize: '18px',
    width: '80%',
  },
}));

export const InformationDrawer = (props) => {
  const classes = useStyles();
  const {
    ticketsInformationData,
    showsItems,
    faqItems,
    handleItemClick,
    ticketsInformationText,
    drawerOpen,
    setDrawerOpen,
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
          background: "transparent linear-gradient(180deg, #058E9C 0%, #03474E 100%) 0% 0% no-repeat padding-box", 
          boxShadow: "-23px 3px 22px #00000073",
          // minWidth: '60%',
          width: '1100px',
        },
      }}>
      <Box className={classes.main}>
        <Box className={classes.title}>{ticketTitle}</Box>
        <Box className={classes.description}>{ticketDescription}</Box>
        <Box sx={{
          display: "flex", 
          justifyContent: "space-between",
          marginTop: "30px",
        }}>
          <DrawerItemList
            ticketsInformationText={ticketsInformationText}
            items={showsItems}
            handleItemClick={handleItemClick}
            isDrawerOpen={drawerOpen}
          />
        </Box>
        <Box className={classes.title}>{faqTitle}</Box>
        <Box className={classes.description}>{faqDescription}</Box>
        <Box sx={{
          marginTop: "30px",
        }}>
          {/* <DrawerItemList
            ticketsInformationText={ticketsInformationText}
            items={faqItems}
            handleItemClick={handleItemClick}
            isDrawerOpen={drawerOpen}
          /> */}
        </Box>
        <Box className={classes.title}>{accessibilityTitle}</Box>
        <Box className={classes.description}>{accessibilityDescription}</Box>
        <Box className={classes.title}>{informationTitle}</Box>
        <Box className={classes.description}>{informationDescription}</Box>
      </Box>
    </Drawer>
  );
};
