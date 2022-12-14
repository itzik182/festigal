import Box from '@material-ui/core/Box';
import Link from 'next/link';

const GoldButton = (props) => {
  const {
    text,
    link = '',
    onClick,
    isBold = false,
    isBlank = true,
    sx,
    buttonStyle,
    type = '',
    isDesktopLayout = true,
    isClock = false,
  } = props;

  return (
    <Box
    onClick={onClick && onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'auto',
        position: 'relative',
        transition: 'all .2s ease-in-out',
        backgroundImage:
          'linear-gradient(245deg, hsl(43deg 95% 32%) 0%, hsl(43deg 63% 42%) 10%, hsl(44deg 50% 51%) 20%, hsl(46deg 56% 61%) 30%, hsl(48deg 68% 72%) 40%, hsl(50deg 100% 84%) 50%, hsl(50deg 93% 82%) 60%, hsl(51deg 88% 80%) 70%, hsl(48deg 74% 72%) 80%, hsl(44deg 64% 58%) 90%, hsl(42deg 76% 44%) 100%)',
        borderRadius: '35px',
        '&:hover': {
          transform: isDesktopLayout ? 'scale(1.1)' : 'none',
          backgroundImage:
            'linear-gradient(120deg, hsl(43deg 95% 32%) 0%, hsl(43deg 63% 42%) 10%, hsl(44deg 50% 51%) 20%, hsl(46deg 56% 61%) 30%, hsl(48deg 68% 72%) 40%, hsl(50deg 100% 84%) 50%, hsl(50deg 93% 82%) 60%, hsl(51deg 88% 80%) 70%, hsl(48deg 74% 72%) 80%, hsl(44deg 64% 58%) 90%, hsl(42deg 76% 44%) 100%)',
        },
        ...sx,
      }}>
      {type === 'submit' && (
        <input
          type={type}
          style={{
            width: '100%',
            height: '50px',
            position: 'absolute',
            borderRadius: '50px',
            background: 'transparent',
            cursor: 'pointer',
            color: 'transparent',
            border: '0',
          }}
        />
      )}
      <Link href={link}>
        <a
          target={isBlank ? '_blank' : '_self'}
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
          {isClock && <>???</>} {text} 
          {/* <div class="hourglass"></div> */}
          </Box>
        </a>
      </Link>
    </Box>
  );
};

export default GoldButton;
