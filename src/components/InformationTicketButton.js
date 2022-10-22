import Box from '@material-ui/core/Box';
import Link from 'next/link';

export const InformationTicketButton = (props) => {
  const { text } = props;

  return (
    <Box
      sx={{
        color: '#000',
        cursor: 'pointer',
        padding: '8px 35px',
        fontFamily: "'Noto Sans Hebrew'",
        fontSize: '19px',
        textAlign: 'center',
        borderRadius: '35px',
        backgroundImage:
          'linear-gradient(\n  245deg,\n  hsl(43deg 95% 32%) 0%,\n  hsl(43deg 63% 42%) 10%,\n  hsl(44deg 50% 51%) 20%,\n  hsl(46deg 56% 61%) 30%,\n  hsl(48deg 68% 72%) 40%,\n  hsl(50deg 100% 84%) 50%,\n  hsl(50deg 93% 82%) 60%,\n  hsl(51deg 88% 80%) 70%,\n  hsl(48deg 74% 72%) 80%,\n  hsl(44deg 64% 58%) 90%,\n  hsl(42deg 76% 44%) 100%\n)',
      }}>
      <Link href='https://www.youtube.com/c/myfestigalofficial/featured'>
        <a target='_blank'>{text}</a>
      </Link>
    </Box>
  );
};

export default InformationTicketButton;
