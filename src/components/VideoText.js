import Box from '@material-ui/core/Box';

export const VideoText = (props) => {
  const { videoBigText, videoSmallText } = props;

  return (
    <Box
      sx={{
        opacity: '0.7',
        position: 'absolute',
        zIndex: '10',
        bottom: '50px',
        right: '0',
        left: '0',
        textAlign: 'center',
        fontFamily: 'Noto Sans Hebrew',
        textShadow: '0px 3px 14px #0000005c',
      }}>
      <Box
        sx={{
          color: '#fff',
          fontSize: '4.467vw',
          fontWeight: 'bold',
        }}>
        {videoBigText}
      </Box>
      <Box
        sx={{
          color: '#FBD491',
          fontSize: '2.207vw',
        }}>
        {videoSmallText}
      </Box>
    </Box>
  );
};

export default VideoText;
