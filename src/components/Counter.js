import Countdown from 'react-countdown';

const Completionist = () => <></>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    const diffInHours = days * 24 + hours;
    // Render a countdown
    return (
      <span>
        {diffInHours}:{minutes}:{seconds}
      </span>
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
