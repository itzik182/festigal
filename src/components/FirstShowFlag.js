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
    textAlign: 'center',
    '&.desktop': {
      background:
        "transparent url('images/flag.png') 0% 0% no-repeat padding-box",
      height: '287px',
      width: '282px',
      padding: '40px 35px 0',
      right: '60px',
    },
    '&.mobile': {
      background:
        "transparent url('mobile/images/flag.png') 0% 0% no-repeat padding-box",
      height: '167px',
      width: '188px',
      padding: '8px 0 0',
    },
    '&.mobile .flagText': {
      fontSize: '16px',
      padding: '0 4px 0',
      marginBottom: '0',
      lineHeight: '20px',
    },
    '&.mobile .flagTimer': {
      fontSize: '28px',
      margin: '-6px 0px 2px',
    },
    '&.mobile .flagButtonText': {
      padding: '7px 20px 0',
    },
  },
  flagText: {
    fontSize: '20px',
    fontFamily: 'GveretLevinAlefAlefAlef',
    marginBottom: '15px',
  },
  flagTimer: {
    fontFamily: 'Noto Sans Hebrew',
    fontSize: '41px',
    color: '#2D555B',
    fontWeight: '600',
    marginBottom: '20px',
  },
}));

const FirstShowFlag = (props) => {
  const windowWidth = useWindowWidth();
  const isDesktopLayout = windowWidth >= 960;
  const classes = useStyles();
  const { flagButtonText, showLink, flagText, firstShowDate } = props;

  return (
    <Box
      className={`${classes.flag} ${isDesktopLayout ? ' desktop' : ' mobile'}`}>
      <Box className={`${classes.flagText} flagText`}>{flagText}</Box>
      <img src='./images/Path-994.svg' alt='Path' />
      <Box className={`${classes.flagTimer} flagTimer`}>
        <Counter date={firstShowDate} isDesktopLayout={isDesktopLayout} />
      </Box>
      <Box className={'flagButtonText'}>
        <GoldButton
          isClock={true}
          isBlank={false}
          isDesktopLayout={isDesktopLayout}
          buttonStyle={
            !isDesktopLayout && {
              padding: isDesktopLayout ? '4px 35px' : '4px 25px',
              fontSize: isDesktopLayout ? '19px' : '12pt',
            }
          }
          text={flagButtonText}
          link={showLink}
        />
      </Box>
    </Box>
  );
};

export default FirstShowFlag;
