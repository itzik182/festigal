import Box from '@material-ui/core/Box';
import Link from 'next/link';

const GoldButton = (props) => {
  const { text, link = '', isBold = false, sx, buttonStyle } = props;

  return (
    <Box
      sx={{
        transition: 'all .2s ease-in-out',
        backgroundImage:
          'linear-gradient(245deg, hsl(43deg 95% 32%) 0%, hsl(43deg 63% 42%) 10%, hsl(44deg 50% 51%) 20%, hsl(46deg 56% 61%) 30%, hsl(48deg 68% 72%) 40%, hsl(50deg 100% 84%) 50%, hsl(50deg 93% 82%) 60%, hsl(51deg 88% 80%) 70%, hsl(48deg 74% 72%) 80%, hsl(44deg 64% 58%) 90%, hsl(42deg 76% 44%) 100%)',
        borderRadius: '35px',
        '&:hover': {
          transform: 'scale(1.1)',
          backgroundImage:
            'linear-gradient(120deg, hsl(43deg 95% 32%) 0%, hsl(43deg 63% 42%) 10%, hsl(44deg 50% 51%) 20%, hsl(46deg 56% 61%) 30%, hsl(48deg 68% 72%) 40%, hsl(50deg 100% 84%) 50%, hsl(50deg 93% 82%) 60%, hsl(51deg 88% 80%) 70%, hsl(48deg 74% 72%) 80%, hsl(44deg 64% 58%) 90%, hsl(42deg 76% 44%) 100%)',
        },
        ...sx,
      }}>
      <input
        type='submit'
        style={{
          width: '229px',
          height: '50px',
          position: 'absolute',
          borderRadius: '50px',
          background: 'transparent',
          cursor: 'pointer',
          color: 'transparent',
          border: '0',
        }}
      />
      <Link href={link}>
        <a
          target='_blank'
          style={{ pointerEvents: link && link.length ? 'auto' : 'none' }}>
          <Box
            className='box-primary'
            sx={{
              transition: 'all .2s ease-in-out',
              '&:hover': {
                // transform: 'scale(1.1)',
                // backgroundImage: 'none !important',
                // backgroundImage:
                //   'linear-gradient(120deg, hsl(43deg 95% 32%) 0%, hsl(43deg 63% 42%) 10%, hsl(44deg 50% 51%) 20%, hsl(46deg 56% 61%) 30%, hsl(48deg 68% 72%) 40%, hsl(50deg 100% 84%) 50%, hsl(50deg 93% 82%) 60%, hsl(51deg 88% 80%) 70%, hsl(48deg 74% 72%) 80%, hsl(44deg 64% 58%) 90%, hsl(42deg 76% 44%) 100%) !important',
              },
              color: '#000',
              cursor: 'pointer',
              padding: '8px 0',
              border: '3px solid #C79A4F',
              fontFamily: "'Noto Sans Hebrew'",
              fontSize: '19px',
              textAlign: 'center',
              borderRadius: '35px',
              fontWeight: isBold ? 'bold' : '600',
              ...buttonStyle,
              // backgroundImage:
              //   'linear-gradient(245deg, hsl(43deg 95% 32%) 0%, hsl(43deg 63% 42%) 10%, hsl(44deg 50% 51%) 20%, hsl(46deg 56% 61%) 30%, hsl(48deg 68% 72%) 40%, hsl(50deg 100% 84%) 50%, hsl(50deg 93% 82%) 60%, hsl(51deg 88% 80%) 70%, hsl(48deg 74% 72%) 80%, hsl(44deg 64% 58%) 90%, hsl(42deg 76% 44%) 100%)',
            }}>
            {text}
          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default GoldButton;
