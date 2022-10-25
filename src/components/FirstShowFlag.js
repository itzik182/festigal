import Box from '@material-ui/core/Box';
import Counter from 'components/Counter';
import GoldButton from 'components/GoldButton';
import { useWindowWidth } from '@react-hook/window-size';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    flag: {
        position: 'absolute',
        zIndex: '100',
        bottom: '0',
        right: '60px',
        textAlign: 'center',
        '&.desktop': {
            background:
          "transparent url('images/flag.png') 0% 0% no-repeat padding-box",
        height: '287px',
        width: '282px',
        padding: '40px 35px 0',
        },
        '&.mobile': {
            background:
            "transparent url('mobile/images/flag.png') 0% 0% no-repeat padding-box",
          height: '201px',
          width: '167px',
          padding: '40px 35px 0',
        }
      },
}));


export const FirstShowFlag = (props) => {
  const windowWidth = useWindowWidth();
  const isDesktopLayout = windowWidth >= 960;
  const classes = useStyles();
  const { flagButtonText, showLink, flagText, firstShowDate } = props;

  return (
    <Box className={`${classes.flag} ${isDesktopLayout ? ' desktop' : ' mobile'}`}>
      <Box
        sx={{
          fontSize: '20px',
          fontFamily: 'GveretLevinAlefAlefAlef',
          marginBottom: '15px',
        }}>
        {flagText}
      </Box>
      <img src='./images/Path-994.svg' alt='Path' />
      <Box
        sx={{
          fontFamily: 'Noto Sans Hebrew',
          fontSize: '41px',
          color: '#2D555B',
          fontWeight: 'bold',
          marginBottom: '25px',
        }}>
        <Counter date={firstShowDate} />
      </Box>
      <GoldButton text={flagButtonText} link={showLink} />
    </Box>
  );
};

export default FirstShowFlag;
