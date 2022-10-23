import Box from '@material-ui/core/Box';
import Counter from 'components/Counter';
import GoldButton from 'components/GoldButton';

export const FirstShowFlag = (props) => {
  const { flagButtonText, showLink, flagText, firstShowDate } = props;

  return (
    <Box
      sx={{
        background:
          "transparent url('images/flag.png') 0% 0% no-repeat padding-box",
        position: 'absolute',
        zIndex: '100',
        bottom: '0',
        right: '60px',
        height: '287px',
        width: '282px',
        textAlign: 'center',
        padding: '40px 35px 0',
      }}>
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
