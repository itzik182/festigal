import Box from '@material-ui/core/Box';
import Link from 'next/link';

export const BuyTicketButton = (props) => {
  const { text } = props;

  return (
    <Box
      sx={{
        color: '#000',
        cursor: 'pointer',
        padding: '8px 35px',
        fontFamily: "'Noto Sans Hebrew'",
        fontWeight: '600',
        fontSize: '20px',
        textAlign: 'center',
        border: '3px solid #C79A4F',
        borderRadius: '35px',
        background: "transparent radial-gradient(closest-side at 50% 50%, #4FDBD7 0%, #01A2B9 100%) 0% 0% no-repeat padding-box", 
        boxShadow: "0px 10px 6px #00000029"
      }}>
      <Link href='https://www.youtube.com/c/myfestigalofficial/featured'>
        <a target='_blank'>{text}</a>
      </Link>
    </Box>
  );
};

export default BuyTicketButton;
