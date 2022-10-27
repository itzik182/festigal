import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { DrawerItemList } from './DrawerItemList';

export const MenuDrawer = (props) => {
  const {
    items,
    handleItemClick,
    ticketsInformationText,
    ticketsInformationLink,
    drawerOpen,
    setDrawerOpen,
    isDesktopLayout,
  } = props;

  return (
    <Drawer
      anchor='right'
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      sx={{
        '.MuiPaper-root': {
          background:
            'transparent linear-gradient(180deg, #058E9C 0%, #03474E 100%) 0% 0% no-repeat padding-box;',
          width: isDesktopLayout ? '35%' : '95%',
        },
      }}>
      <img
        src='./images/close.svg'
        alt='close'
        onClick={() => setDrawerOpen(false)}
        style={{
          position: 'absolute',
          cursor: 'pointer',
          left: '37px',
          top: '47px',
          zIndex: 1,
        }}
      />
      <DrawerItemList
        ticketsInformationText={ticketsInformationText}
        ticketsInformationLink={ticketsInformationLink}
        items={items}
        handleItemClick={handleItemClick}
        isDrawerOpen={drawerOpen}
      />
    </Drawer>
  );
};
