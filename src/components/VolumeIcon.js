import Box from '@material-ui/core/Box';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';

const VolumeIcon = (props) => {
  const { isVideoMute, setVideoMute, isDesktopLayout } = props;

  return (
    <Box
      onClick={() => {
        setVideoMute(!isVideoMute);
      }}
      sx={{
        position: 'absolute',
        left: '5%',
        top: '37%',
        color: '#fff',
        opacity: '0.6',
        zIndex: '100',
        cursor: 'pointer',
        '& svg': {
          fontSize: isDesktopLayout ? 150 : 80,
        },
      }}>
      {isVideoMute ? <VolumeOffOutlinedIcon /> : <VolumeUpOutlinedIcon />}
    </Box>
  );
};

export default VolumeIcon;
