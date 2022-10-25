import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

function ActorDialog(props) {
  const { open, item, onClose } = props;

  if (!item) {
    return <></>;
  }

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        '.MuiPaper-root': {
          maxWidth: '60%',
          minWidth: '900px',
          minHeight: '564px',
          height: 'auto',
          margin: '0',
          borderRadius: '44px',
          overflow: 'visible',
          direction: 'rtl',
        },
      }}>
      {onClose ? (
        <Box
          sx={{
            zIndex: 1,
            position: 'absolute',
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
          display: 'flex',
        }}>
        <Box
          sx={{
            textAlign: 'right',
            width: '100%',
            position: 'relative',
            marginTop: '-55px',
            top: '6px',
          }}>
          <Image
            width={'585px'}
            height={'847px'}
            src={item?.imageBig?.url}
            alt={item?.imageBig?.alt}
          />

          {/* <img
            src={item?.imageBig?.url}
            style={{
              position: 'relative',
              height: '47.5vw',
              minHeight: '514px',
              marginTop: '-55px',
              top: '6px',
            }}
          /> */}
        </Box>
        <Box
          sx={{
            padding: '10% 40px 0 60px',
            height: 'fit-content',
            width: '100%',
          }}>
          <Box
            sx={{
              margin: '0 0 80px',
              textAlign: 'right',
              fontSize: '40px',
              fontFamily: 'GveretLevinAlefAlefAlef',
              lineHeight: '0.7',
              letterSpacing: '2.24px',
            }}>
            {item?.name}
          </Box>
          <Box
            sx={{
              minWidth: '255px',
              fontSize: '20px',
              textAlign: 'right',
              fontFamily: 'Noto Sans Hebrew',
              lineHeight: '1.65',
            }}>
            {item?.description}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default ActorDialog;
