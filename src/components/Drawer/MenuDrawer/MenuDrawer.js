import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { DrawerItemList } from './DrawerItemList';
import CloseButton from '../CloseButton';

export const MenuDrawer = (props) => {
  const {
    items,
    handleItemClick,
    ticketsInformationText,
    ticketsInformationLink,
    allNewsFlashMenuText,
    socialIcons,
    setNewsFlashesDrawerOpen,
    drawerOpen,
    setDrawerOpen,
    isDesktopLayout = true,
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
      <CloseButton
        setDrawerOpen={setDrawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
      <DrawerItemList
        items={items}
        ticketsInformationText={ticketsInformationText}
        ticketsInformationLink={ticketsInformationLink}
        allNewsFlashMenuText={allNewsFlashMenuText}
        setNewsFlashesDrawerOpen={setNewsFlashesDrawerOpen}
        socialIcons={socialIcons}
        handleItemClick={handleItemClick}
        isDrawerOpen={drawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
    </Drawer>
  );
};
