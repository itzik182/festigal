import Box from '@material-ui/core/Box';
import { ShareSocialButton } from 'components/ShareSocialButton';

const GameBlock = (props) => {
  const { items, socialIcons, isDesktopLayout } = props;

  const handleItemClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      {items
        .filter((item) => item.isDisplayMobile && item.imageMobile)
        .map((item, index) => {
          const { id, firstName, firstTitle, link, imageMobile, imageText } =
            item;

          return (
            <Box
              key={id || index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '30px 0 0',
                color: '#000',
                cursor: 'pointer',
              }}>
              <Box
                sx={{
                  position: 'relative',
                }}>
                <ShareSocialButton
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    left: '15px',
                  }}
                  socialIcons={socialIcons}
                  shareUrl={link}
                  isDesktopLayout={isDesktopLayout}
                />
                <img
                  src={imageMobile?.url}
                  alt={imageMobile?.alt}
                  onClick={() => handleItemClick(link)}
                />
                {imageText && (
                  <Box
                    sx={{
                      fontSize: '46px',
                      fontFamily: 'GveretLevinAlefAlefAlef',
                      position: 'absolute',
                      color: 'rgb(255, 255, 255)',
                      display: '-webkit-box',
                      WebkitLineClamp: '3',
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      padding: '20px',
                      bottom: '0',
                    }}>
                    {imageText}
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  margin: '10px 0 0',
                  fontSize: '14px',
                  fontFamily: 'Noto Sans Hebrew',
                  fontWeight: '800',
                }}>
                {firstTitle}
              </Box>
              <Box
                sx={{
                  fontSize: '14px',
                  fontFamily: 'Noto Sans Hebrew',
                }}>
                {firstName}
              </Box>
            </Box>
          );
        })}
    </>
  );
};

export default GameBlock;
