import Box from '@material-ui/core/Box';

const VideoText = (props) => {
  const { videoBigText, videoSmallText, isDesktopLayout, isDisplayFlag } =
    props;

  return (
    <Box
      sx={{
        width: isDesktopLayout ? '100%' : isDisplayFlag ? '110px' : 'auto',
        opacity: '0.7',
        position: 'absolute',
        zIndex: '10',
        bottom: isDesktopLayout ? '50px' : '40px',
        right: isDesktopLayout ? '0' : isDisplayFlag ? '202px' : '0',
        left: '0',
        textAlign: isDesktopLayout ? 'center' : isDisplayFlag ? 'right' : 'center',
        fontFamily: 'Noto Sans Hebrew',
        textShadow: '0px 3px 14px #0000005c',
      }}>
      <Box
        sx={{
          font: isDesktopLayout
            ? 'normal normal bold 4.467vw/76px Noto Sans Hebrew'
            : 'normal normal bold 30px/31px Noto Sans Hebrew',
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
