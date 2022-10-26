import Box from '@material-ui/core/Box';

export const VideoText = (props) => {
  const { videoBigText, videoSmallText, isDesktopLayout } = props;

  return (
    <Box
      sx={{
        width: isDesktopLayout ? '100%' : '110px',
        opacity: '0.7',
        position: 'absolute',
        zIndex: '10',
        bottom: isDesktopLayout ? '50px' : '40px',
        right: isDesktopLayout ?  '0' : '202px',
        left: '0',
        textAlign: isDesktopLayout ? 'center' : 'right',
        fontFamily: 'Noto Sans Hebrew',
        textShadow: '0px 3px 14px #0000005c',
      }}>
      <Box
        sx={{
          font: isDesktopLayout ? 'normal normal bold 4.467vw/76px Noto Sans Hebrew' : 'normal normal bold 30px/31px Noto Sans Hebrew',
          color: '#fff',
          // fontSize: '4.467vw',
          // fontWeight: 'bold',
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
