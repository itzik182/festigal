import Countdown from 'react-countdown';
import Box from '@material-ui/core/Box';

const Completionist = () => <></>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // const diffInHours = days * 24 + hours;
    // Render a countdown
    return (
      <>
        <Box>
        {days < 10 && 0}{days}:{hours < 10 && 0}{hours}:{minutes < 10 && 0}{minutes}:{seconds < 10 && 0}{seconds}
        </Box>
        <Box
          sx={{
            font: 'normal normal normal 16px/18px Noto Sans Hebrew',
            letterSpacing: '-0.1px',
            '& span': {
                padding: '0 5px 0 19px',
            }
          }}>
            <span>שניות</span>
            <span>דקות</span>
            <span>שעות</span>
            <span>ימים</span>
        </Box>
      </>
    );
  }
};

const Counter = (props) => {
  const { date } = props;

  const date1 = new Date(Date.now());
  const date2 = new Date(date);
  const diffInTime = date2 - date1;

  return <Countdown date={Date.now() + diffInTime} renderer={renderer} />;
};

export default Counter;
