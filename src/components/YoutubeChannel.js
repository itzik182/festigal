import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'inherit',
    lineHeight: 1,
    '&:not(:last-of-type)': {
      marginRight: '1.2rem',
    },
  },
}));

const YoutubeChannel = (props) => {
  const classes = useStyles();
  const { mainData, isDesktopLayout } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isDesktopLayout ? 'normal' : 'space-around',
      }}>
      <Box
        sx={{
          textAlign: 'center',
          margin: '5px 0 0 19px',
        }}>
        <Box
          sx={{
            fontSize: isDesktopLayout ? '0.946vw' : '20px',
            fontWeight: 'bold',
          }}>
          {mainData.youtubeText}
        </Box>
        <Box
          sx={{
            fontSize: isDesktopLayout ? '27px' : '29px',
          }}>
          {mainData.festigalYoutubeText}
        </Box>
      </Box>
      <Box>
        <a
          href='https://www.youtube.com/c/myfestigalofficial/featured'
          target='_blank'
          rel='noreferrer'
          className={classes.link}>
          <img src='./social-icons/youtube-logo.png' alt='youtube-logo' />
        </a>
      </Box>
    </Box>
  );
};

export default YoutubeChannel;
