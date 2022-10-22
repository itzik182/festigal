import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import {DrawerItemList} from './DrawerItemList';

export const MenuDrawer = (props) => {
  const { items, handleItemClick, ticketsInformationText, drawerOpen, setDrawerOpen } =
    props;

  return (
    <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          '.MuiPaper-root': {
            background:
              'transparent linear-gradient(180deg, #058E9C 0%, #03474E 100%) 0% 0% no-repeat padding-box;',
            width: '35%',
          },
        }}>
        <DrawerItemList
          ticketsInformationText={ticketsInformationText}
          items={items}
          handleItemClick={handleItemClick}
          isDrawerOpen={drawerOpen}
        />
      </Drawer>
  );
};
