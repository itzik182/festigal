import Box from '@material-ui/core/Box';
import Link from 'next/link';

export const GoldButton = (props) => {
  const { text, link = '' } = props;

  return (
    <Link href={link}>
      <a target='_blank' style={{pointerEvents: link && link.length ? 'auto' : 'none'}}>
        <Box
          sx={{
            transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            color: '#000',
            cursor: 'pointer',
            padding: '8px 35px',
            border: '3px solid #C79A4F',
            fontFamily: "'Noto Sans Hebrew'",
            fontSize: '19px',
            textAlign: 'center',
            borderRadius: '35px',
            backgroundImage:
              'linear-gradient(\n  245deg,\n  hsl(43deg 95% 32%) 0%,\n  hsl(43deg 63% 42%) 10%,\n  hsl(44deg 50% 51%) 20%,\n  hsl(46deg 56% 61%) 30%,\n  hsl(48deg 68% 72%) 40%,\n  hsl(50deg 100% 84%) 50%,\n  hsl(50deg 93% 82%) 60%,\n  hsl(51deg 88% 80%) 70%,\n  hsl(48deg 74% 72%) 80%,\n  hsl(44deg 64% 58%) 90%,\n  hsl(42deg 76% 44%) 100%\n)',
          }}>
          {text}
        </Box>
      </a>
    </Link>
  );
};

export default GoldButton;
