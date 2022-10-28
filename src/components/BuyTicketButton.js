import Box from '@material-ui/core/Box';
import Link from 'next/link';

const BuyTicketButton = (props) => {
  const { isTicketsAvailable, link, isDesktopLayout } = props;

  return (
    <Link href={link} sx={{
      pointerEvents: isTicketsAvailable ? 'auto' : "none",
    }}>
      <a target='_blank' style={{
        pointerEvents: isTicketsAvailable ? 'auto' : "none",
      }}>
        <Box
          sx={{
            display: 'flex',
            color: '#fff',
            cursor: 'pointer',
            padding: isDesktopLayout ? '8px 20px' : '12px 26px',
            fontFamily: "'Noto Sans Hebrew'",
            fontWeight: isTicketsAvailable ? '900' : 'normal',
            fontSize: isDesktopLayout ? isTicketsAvailable ? '19px' : '20px' : '14px',
            textAlign: 'center',
            borderRadius: '35px',
            background: isTicketsAvailable
              ? 'transparent radial-gradient(closest-side at 50% 50%, #4FDBD7 0%, #01A2B9 100%) 0% 0% no-repeat padding-box'
              : '#FF5555',
            boxShadow: '0px 10px 6px #00000029',
          }}>
          <img
            src='./images/calendar.svg'
            alt='calendar'
            style={{
              marginLeft: '10px',
            }}
          />
          {isTicketsAvailable ? 'הזמנת כרטיסים' : 'הכרטיסים אזלו'}
        </Box>
      </a>
    </Link>
  );
};

export default BuyTicketButton;
