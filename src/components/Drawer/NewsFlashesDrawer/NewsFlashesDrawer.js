import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { NewsFlashItemList } from './NewsFlashItemList';
import Box from '@material-ui/core/Box';
import GoldButton from 'components/GoldButton';
import CloseButton from '../CloseButton';

export const NewsFlashesDrawer = (props) => {
  const {
    items,
    allNewsFlashText,
    allNewsFlashLink,
    allNewsFlashMissText,
    drawerOpen,
    setDrawerOpen,
    isDesktopLayout = true,
  } = props;

  return (
    <Drawer
      anchor='left'
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      sx={{
        '.MuiPaper-root': {
          background:
            'transparent linear-gradient(180deg, #058E9C 0%, #03474E 100%) 0% 0% no-repeat padding-box;',
          width: isDesktopLayout ? '493px' : '100%',
          padding: '42px 37px 0 42px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }}>
      <CloseButton
        setDrawerOpen={setDrawerOpen}
        isDesktopLayout={isDesktopLayout}
      />
      <Box
        sx={{
          textAlign: 'right',
          font: 'normal normal 600 28px/38px Noto Sans Hebrew',
          letterSpacing: '0.92px',
          color: '#fff',
        }}>
        מבזק הפסטיגל
      </Box>
      <NewsFlashItemList
        allNewsFlashText={allNewsFlashText}
        allNewsFlashLink={allNewsFlashLink}
        items={items}
        isDrawerOpen={drawerOpen}
      />
      <Box
        sx={{
          position: 'fixed',
          color: '#fff',
          background: '#021B23',
          bottom: '0',
          width: isDesktopLayout ? '493px' : '100%',
          left: '0',
          height: '124px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0 15px',
        }}>
        <span
          style={{
            font: 'normal normal 600 21px/28px Noto Sans Hebrew',
          }}>
          {allNewsFlashMissText}
        </span>
        <GoldButton
          text={allNewsFlashText}
          link={allNewsFlashLink}
          buttonStyle={{ padding: isDesktopLayout ? '8px 35px' : '8px 15px' }}
        />
      </Box>
    </Drawer>
  );
};
