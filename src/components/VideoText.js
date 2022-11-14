import Box from '@material-ui/core/Box';

const VideoText = (props) => {
  const { videoBigText, videoSmallText, isDesktopLayout, isDisplayFlag, sx, } =
    props;

  return (
    <Box
      sx={{
        width: isDesktopLayout ? '100%' : isDisplayFlag ? '110px' : 'auto',
        opacity: isDesktopLayout ? '0.7' : videoSmallText ? '0.7' : '1',
        position: 'absolute',
        zIndex: '10',
        bottom: isDesktopLayout ? '50px' : '40px',
        right: isDesktopLayout ? '0' : isDisplayFlag ? '202px' : '0',
        left: '0',
        textAlign: isDesktopLayout ? 'center' : isDisplayFlag ? 'right' : 'center',
        fontFamily: 'Noto Sans Hebrew',
        textShadow: '0px 3px 14px #0000005c',
        ...sx,
      }}>
      <Box
        sx={{
          font: isDesktopLayout
            ? 'normal normal 900 4.467vw/76px Noto Sans Hebrew'
            : 'normal normal 900 30px/31px Noto Sans Hebrew',
          color: '#fff',
        }}>
        {videoBigText}
      </Box>
      <Box
        sx={{
          color: '#FBD491',
          fontSize: isDesktopLayout ? '2.207vw' : '18px',
        }}>
        {videoSmallText}
      </Box>
    </Box>
  );
};

export default VideoText;
