import Box from '@material-ui/core/Box';
import { ShareSocialButton } from './ShareSocialButton';

const ImageNews = (props) => {
  const { items, socialIcons, isDesktopLayout = true } = props;

  const handleItemClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '150px 0 0',
      }}>
      {items.map((item, index) => (
        <Box
          key={item.id || index}
          sx={{
            position: 'relative',
            cursor: 'pointer',
            width: '32%',
            marginTop: '20px',
            transition: 'all .2s ease-in-out .1s',
            '&:hover': {
              transform: 'scale(1.02)',
            },
            // '&:nth-child(4n)': {
            //   marginTop: '-90px',
            // },
            marginTop:
              index === 1 ||
              index === 4 ||
              index === 7 ||
              index === 10 ||
              index === 13
                ? '-90px'
                : '20px',
          }}>
          <ShareSocialButton
            sx={{
              position: 'absolute',
              left: '10px',
              top: '10px',
            }}
            socialIcons={socialIcons}
            shareUrl={item.link}
            isDesktopLayout={isDesktopLayout}
          />
          <img
            onClick={() => handleItemClick(item.link)}
            src={item.imageWeb?.url}
            title={item.imageWeb?.title}
            alt={item.imageWeb?.alt}
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ImageNews;
