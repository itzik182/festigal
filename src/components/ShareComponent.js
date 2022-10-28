import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import Box from '@material-ui/core/Box';

export const ShareComponent = (props) => {
  const { shareUrl, isVertical, isDesktopLayout } = props;

  const size = isDesktopLayout ? 50 : 40;
  const bgStyle = {
    fill: '#fff',
    cy: '31px',
    filter: 'drop-shadow(0px 2px 1px rgb(0 0 0 / 0.2))',
  };

  return (
    <Box sx={{
        display: isVertical ? "flex" : 'block', 
        flexDirection: isVertical ? "column" : 'initial',
    }}>
      <FacebookShareButton url={shareUrl} quote={'title'}>
        <span
          className='share-icon'
          style={{ marginRight: isDesktopLayout ? '10px' : '5px' }}>
          <FacebookIcon
            size={size}
            round
            bgStyle={bgStyle}
            iconFillColor={'#000'}
          />
        </span>
      </FacebookShareButton>
      <WhatsappShareButton url={shareUrl} quote={'title'}>
        <span
          className='share-icon'
          style={{ marginRight: isDesktopLayout ? '10px' : '5px' }}>
          <WhatsappIcon
            size={size}
            round
            bgStyle={bgStyle}
            iconFillColor={'#000'}
          />
        </span>
      </WhatsappShareButton>
      <FacebookMessengerShareButton url={shareUrl} quote={'title'}>
        <span
          className='share-icon'
          style={{ marginRight: isDesktopLayout ? '10px' : '5px' }}>
          <FacebookMessengerIcon
            size={size}
            round
            bgStyle={bgStyle}
            iconFillColor={'#000'}
          />
        </span>
      </FacebookMessengerShareButton>
      <TelegramShareButton url={shareUrl} quote={'title'}>
        <span
          className='share-icon'
          style={{ marginRight: isDesktopLayout ? '10px' : '5px' }}>
          <TelegramIcon
            size={size}
            round
            bgStyle={bgStyle}
            iconFillColor={'#000'}
          />
        </span>
      </TelegramShareButton>
      <EmailShareButton url={shareUrl} quote={'title'}>
        <span
          className='share-icon'
          style={{ marginRight: isDesktopLayout ? '10px' : '5px' }}>
          <EmailIcon
            size={size}
            round
            bgStyle={bgStyle}
            iconFillColor={'#000'}
          />
          {/* <img src='./images/Path73.svg' alt='Share Social Button' /> */}
        </span>
      </EmailShareButton>
      <TwitterShareButton url={shareUrl} quote={'title'}>
        <span
          className='share-icon'
          style={{ marginRight: isDesktopLayout ? '10px' : '5px' }}>
          <TwitterIcon
            size={size}
            round
            bgStyle={bgStyle}
            iconFillColor={'#000'}
          />
          {/* <img src='./images/Path73.svg' alt='Share Social Button' /> */}
        </span>
      </TwitterShareButton>
    </Box>
  );
};
