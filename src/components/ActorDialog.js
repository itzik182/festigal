import * as React from 'react';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function ActorDialog(props) {
  const { open, item, onClose } = props;

  //   const handleClose = () => {
  //     onClose(selectedValue);
  //   };

  //   const handleListItemClick = (value: string) => {
  //     onClose(value);
  //   };

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        '.MuiPaper-root': {
          maxWidth: '70%',
          minWidth: '900px',
          minHeight: '465px',
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
          //   flexDirection: 'row-reverse',
          //   width: '627px',
          //   background:
          //     'transparent url(./images/FRAME.png) center center no-repeat',
        }}>
        <Box
          sx={{
            textAlign: 'right',
            // position: 'relative',
            // width: '500px',
            // height: '748px',
            // background:
            //   'transparent url(./images/frame-2.png) center center no-repeat',
          }}>
          {/* <img
            //   width={'168px'}
            src={'./images/frame-3.png'}
            style={{
              position: 'absolute',
            //   width: '100%',
              height: 'auto',
            }}
          /> */}
          <img
            src={item?.imageBig?.url}
            style={{
              position: 'relative',
              height: '47.5vw',
              minHeight: '514px',
              marginTop: '-55px',
              top: '6px',
            }}
          />
        </Box>
        <Box
          sx={{
            padding: '100px 40px 0 60px',
            height: 'fit-content',
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
              fontFamily: 'NotoSansHebrew',
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
