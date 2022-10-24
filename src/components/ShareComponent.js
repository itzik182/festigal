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
  const { shareUrl } = props;

  return (
    <Box>
      <FacebookShareButton
        url={shareUrl}
        quote={'title'}
        bgStyle={{ fill: '#fff' }}>
        <span className='share-icon'>
          <FacebookIcon
            size={50}
            round
            bgStyle={{ fill: '#fff' }}
            iconFillColor={'#000'}
          />
        </span>
      </FacebookShareButton>
      <WhatsappShareButton
        url={shareUrl}
        quote={'title'}
        bgStyle={{ fill: '#fff' }}>
        <span className='share-icon'>
          <WhatsappIcon
            size={50}
            round
            bgStyle={{ fill: '#fff' }}
            iconFillColor={'#000'}
          />
        </span>
      </WhatsappShareButton>
      <FacebookMessengerShareButton
        url={shareUrl}
        quote={'title'}
        bgStyle={{ fill: '#fff' }}>
        <span className='share-icon'>
          <FacebookMessengerIcon
            size={50}
            round
            bgStyle={{ fill: '#fff' }}
            iconFillColor={'#000'}
          />
        </span>
      </FacebookMessengerShareButton>
      <TelegramShareButton
        url={shareUrl}
        quote={'title'}
        bgStyle={{ fill: '#fff' }}>
        <span className='share-icon'>
          <TelegramIcon
            size={50}
            round
            bgStyle={{ fill: '#fff' }}
            iconFillColor={'#000'}
          />
        </span>
      </TelegramShareButton>
      <EmailShareButton
        url={shareUrl}
        quote={'title'}
        bgStyle={{ fill: '#fff' }}>
        <span className='share-icon'>
          <EmailIcon
            size={50}
            round
            bgStyle={{ fill: '#fff' }}
            iconFillColor={'#000'}
          />
          {/* <img src='./images/Path73.svg' alt='Share Social Button' /> */}
        </span>
      </EmailShareButton>
      <TwitterShareButton
        url={shareUrl}
        quote={'title'}
        bgStyle={{ fill: '#fff' }}>
        <span className='share-icon'>
          <TwitterIcon
            size={50}
            round
            bgStyle={{ fill: '#fff' }}
            iconFillColor={'#000'}
          />
          {/* <img src='./images/Path73.svg' alt='Share Social Button' /> */}
        </span>
      </TwitterShareButton>
    </Box>
  );
};
