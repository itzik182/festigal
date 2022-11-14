import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const useStyles = makeStyles((isDesktopLayout) => ({
  description: {
    minWidth: '255px',
    fontSize: '20px',
    textAlign: 'right',
    fontFamily: 'Noto Sans Hebrew',
    lineHeight: '1.65',
    '&.mobile': {
      display: '-webkit-box',
      WebkitLineClamp: '13',
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      font: 'normal normal normal 14px/20px Noto Sans Hebrew',
      letterSpacing: '0px',
      overflowY: 'auto',
    },
  },
}));

function ActorDialog(props) {
  const { open, item, onClose, isDesktopLayout } = props;
  const classes = useStyles(isDesktopLayout);

  if (!item) {
    return <></>;
  }

  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{
        '.MuiPaper-root': {
          maxWidth: isDesktopLayout ? '60%' : '90%',
          minWidth: isDesktopLayout ? '900px' : 'auto',
          minHeight: '564px',
          height: 'auto',
          margin: '0',
          borderRadius: isDesktopLayout ? '40px' : '20px',
          overflow: 'visible',
          direction: 'rtl',
          backgroundImage: isDesktopLayout
            ? `url('./background/tapet.png')`
            : `url('./mobile/background/tapet.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: isDesktopLayout ? '110%' : '0% 50%',
          backgroundColor: '#00656D',
          backgroundSize: isDesktopLayout ? '54%' : '100%',
          color: '#ffffff',
        },
      }}>
      {onClose ? (
        <Box
          sx={{
            zIndex: 1,
            position: 'absolute',
            left: isDesktopLayout ? 10 : 1,
            top: isDesktopLayout ? 10 : 1,
          }}>
          <IconButton aria-label='close' onClick={onClose}>
            <CloseIcon sx={{ color: '#ffffff' }} />
          </IconButton>
        </Box>
      ) : null}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktopLayout ? 'row' : 'column',
        }}>
        <Box
          sx={{
            textAlign: isDesktopLayout ? 'right' : 'center',
            width: '100%',
            position: 'relative',
            marginTop: isDesktopLayout ? '-55px' : '30px',
            top: isDesktopLayout ? '6px' : 0,
          }}>
          {isDesktopLayout ? (
            <Image
              width={'585px'}
              height={'847px'}
              src={item?.imageBig?.url}
              alt={item?.imageBig?.alt}
            />
          ) : (
            <Image
              width={'285px'}
              height={'407px'}
              src={item?.imageBigMobile?.url}
              alt={item?.imageBigMobile?.alt}
            />
          )}

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
            padding: isDesktopLayout ? '10% 40px 0 60px' : '10px 30px 20px',
            height: 'fit-content',
            width: '100%',
          }}>
          <Box
            sx={{
              margin: isDesktopLayout ? '0 0 80px' : '0 0 20px',
              textAlign: 'right',
              fontSize: isDesktopLayout ? '40px' : '30px',
              fontFamily: 'GveretLevinAlefAlefAlef',
              lineHeight: '0.7',
              letterSpacing: '2.24px',
            }}>
            {item?.name}
          </Box>
          <Box
            className={`${classes.description} ${
              !isDesktopLayout && 'mobile'
            }`}>
            {item?.description}
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}

export default ActorDialog;
