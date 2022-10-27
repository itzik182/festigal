import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import YoutubeEmbed from '../components/YoutubeEmbed';

function MusicDialog(props) {
  const { open, item, onClose, isDesktopLayout = true } = props;

  const videoId = item?.link?.substring(item?.link?.indexOf('=') + 1);

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        '.MuiPaper-root': {
          maxWidth: isDesktopLayout ? '70%' : 'auto',
          minWidth: isDesktopLayout ? '900px' : 'auto',
          minHeight: isDesktopLayout ? '755px' : 'auto',
          height: 'auto',
          margin: '0',
          borderRadius: '44px',
          overflow: 'visible',
          direction: 'rtl',
          background: 'transparent',
        },
      }}>
      {onClose ? (
        <Box
          sx={{
            zIndex: 1,
            position: isDesktopLayout ? 'absolute' : 'auto',
            left: 10,
            top: 10,
          }}>
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}>
            <CloseIcon />
          </IconButton>
        </Box>
      ) : null}
      <Box
        sx={{
        }}>
        <YoutubeEmbed
        // url={'iCAKpASnFgw'}
        url={videoId}
        autoplay={true}
        width={isDesktopLayout ? '100%' : '100%'}
        height={isDesktopLayout ? '796px' : 'auto'}
        containerStyle={{
          margin: '0px auto',
          position: isDesktopLayout ? 'absolute' : 'auto',
          minHeight: isDesktopLayout ? '796px' : 'auto',
        }}
      />
      </Box>
    </Dialog>
  );
}

export default MusicDialog;
