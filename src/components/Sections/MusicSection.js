import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import PlaylistCarousel from '../Carousel/PlaylistCarousel';
import MusicDialog from '../MusicDialog';
import { ShareSocialButton } from 'components/ShareSocialButton';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
    width: '100%',
    backgroundColor: '#021B23 !important',
  },
  container: {
    margin: '0',
  },
  containerA: {
    background: '#021B23 0% 0% no-repeat padding-box',
    padding: '0',
    color: '#FFFFFF',
    textAlign: 'right',
    padding: '100px 11.193vw 150px',
    '&.mobile': {
      padding: '50px 0 140px',
    },
  },
  mediumText: {
    fontFamily: 'Noto Sans Hebrew',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  rectangle: {
    boxShadow: '0px 0px 7px #FFD284',
    border: '1px solid #A2711D',
    borderRadius: '2px',
    width: '90%',
    margin: 'auto',
  },
}));

function MusicSection(props) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [siteUrl, setSiteUrl] = useState();

  useEffect(() => {
    const location = window?.location?.origin;
    setSiteUrl(location);
  });

  const sectionId = 'playlists';
  const classes = useStyles();
  const { items, socialIcons, mainData, isDesktopLayout } = props;

  const playlists = items.filter((item) => item.isPlaylist);
  const podcast = items.filter((item) => !item.isPlaylist);

  const shareUrl = `${siteUrl}/#${sectionId}`;

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Section id={sectionId} className={classes.section}>
      <Box className={classes.container}>
        <Box
          sx={{
            // padding: isDesktopLayout ? '197px 11.193vw 0' : '0',
            backgroundSize: !isDesktopLayout && 'cover',
            minHeight: isDesktopLayout ? '588px' : '362px',
            background: isDesktopLayout
              ? 'transparent url(./background/myplaylist.png) center center no-repeat padding-box'
              : 'transparent url(./background/myplaylist.png) 53% center no-repeat padding-box',
            backgroundSize: isDesktopLayout ? 'auto' : '288%',
          }}>
          <Box
            sx={{
              position: isDesktopLayout ? 'absolute' : 'absolute',
              bottom: isDesktopLayout ? '2%' : '0',
              left: isDesktopLayout ? 'auto' : '0',
              right: isDesktopLayout ? '17%' : '-14px',
              padding: isDesktopLayout ? '0' : '20px 20px 0 0',
              maxWidth: isDesktopLayout ? '380px' : '224px',
            }}>
            <span
              style={{
                fontFamily: 'GveretLevinAlefAlefAlef',
                position: 'absolute',
                top: isDesktopLayout ? '47px' : '44px',
                left: isDesktopLayout ? '7px' : '14px',
                transform: 'rotate(349deg)',
                fontSize: isDesktopLayout ? '24px' : '13px',
                color: '#fff',
                // textShadow: '1px 1px 1px #000000c4',
                color: '#000000',
                width: '100%',
                textAlign: 'center',
                maxWidth: isDesktopLayout ? '90%' : 'auto',
                maxWidth: isDesktopLayout ? '380px' : '184px',
              }}
              dangerouslySetInnerHTML={{ __html: mainData.festigalSongWriter }}>
              {/* {mainData.festigalSongWriter} */}
            </span>
            <img
              src='./images/Group6746.png'
              alt=''
              title=''
              style={{
                maxWidth: isDesktopLayout ? '380px' : '194px',
              }}
            />
          </Box>
          <Box
            sx={{
              fontSize: isDesktopLayout ? '1.524vw' : '25px',
              fontFamily: 'GveretLevinAlefAlefAlef',
              top: '6%',
              position: 'absolute',
              right: isDesktopLayout ? '38%' : '25%',
            }}>
            <img
              src='./images/Group7362.png'
              alt=''
              title=''
              style={{
                maxWidth: isDesktopLayout ? '380px' : '194px',
              }}
            />
          </Box>
          <Box
            sx={{
              fontSize: isDesktopLayout ? '1.524vw' : '25px',
              fontFamily: 'GveretLevinAlefAlefAlef',
              bottom: '16%',
              position: 'absolute',
              right: '44%',
            }}>
            {mainData.festigalSong}
          </Box>

          <Box
            sx={{
              textAlign: isDesktopLayout ? 'auto' : 'center',
              top: isDesktopLayout ? '28%' : '55%',
              right: isDesktopLayout ? '10%' : '5%',
              position: 'absolute',
            }}>
            <a
              href='https://www.youtube.com/watch?v=iCAKpASnFgw'
              target='_blank'>
              <img
                style={{
                  cursor: 'pointer',
                  maxWidth: isDesktopLayout ? '100%' : '120px',
                }}
                sizes={
                  isDesktopLayout
                    ? '(min-width: 172px) 70vw, 90vw'
                    : '(min-width: 172px) 80vw, 90vw'
                }
                srcset='./images/play.png 375w,
              ./images/play.png 1500w'
                src='./images/play.png'
                alt='play'
              />
            </a>
          </Box>

          {/*<Box
            sx={{
              display: isDesktopLayout ? 'flex' : 'block',
              // marginBottom: '25px',
            }}>
             <Box
              sx={{
                color: '#fff',
                margin: isDesktopLayout ? '0' : '40px 20px 20px 0px',
              }}>
              <Box
                sx={{
                  fontSize: isDesktopLayout ? '1.524vw' : '25px',
                  fontFamily: 'GveretLevinAlefAlefAlef',
                }}>
                {mainData.festigalSong}
              </Box>
              <Box
                sx={{
                  fontSize: isDesktopLayout ? '4.467vw' : '33px',
                  fontFamily: 'Noto Sans Hebrew',
                  fontWeight: '800',
                  fontStyle: 'normal',
                }}>
                {mainData.festigalSongName}
              </Box>
              <Box
                className={classes.mediumText}
                sx={{
                  fontSize: isDesktopLayout ? '1.944vw' : '25px',
                }}>
                {mainData.festigalSongSinger}
              </Box>
            </Box> 
            <Box
              sx={{
                textAlign: isDesktopLayout ? 'auto' : 'center',
              }}>
              <a
                href='https://www.youtube.com/watch?v=iCAKpASnFgw'
                target='_blank'>
                <img
                  style={{
                    cursor: 'pointer',
                    maxWidth: isDesktopLayout ? '100%' : '120px',
                  }}
                  sizes={
                    isDesktopLayout
                      ? '(min-width: 172px) 70vw, 90vw'
                      : '(min-width: 172px) 80vw, 90vw'
                  }
                  srcset='./images/play.png 375w,
              ./images/play.png 1500w'
                  src='./images/play.png'
                  alt='play'
                />
              </a>
            </Box>
          </Box>*/}
        </Box>
        {/*<Box className={classes.rectangle}></Box>
         <Box
          className={`${classes.containerA} ${
            isDesktopLayout ? '' : 'mobile'
          }`}>
          <Box
            className={classes.mediumText}
            sx={{
              fontSize: isDesktopLayout ? '2.312vw' : '30px',
              margin: isDesktopLayout ? '0 0 50px' : '0 0 35px',
              textAlign: isDesktopLayout ? 'right' : 'center',
              position: 'relative',
            }}>
            {mainData.playlistTitle}
            <ShareSocialButton
              sx={{
                position: 'absolute',
                top: isDesktopLayout ? '15px' : '305px',
                right: isDesktopLayout ? '464px' : '300px',
              }}
              socialIcons={socialIcons}
              shareUrl={shareUrl}
              isDesktopLayout={isDesktopLayout}
            />
          </Box>
           <Box>
            <PlaylistCarousel
              items={playlists}
              handleItemClick={handleItemClick}
              isDesktopLayout={isDesktopLayout}
            />
          </Box>
          <Box
            className={classes.mediumText}
            sx={{
              fontSize: isDesktopLayout ? '2.312vw' : '30px',
              margin: isDesktopLayout ? '100px 0 50px' : '120px 0 35px',
              textAlign: isDesktopLayout ? 'right' : 'center',
              position: 'relative',
            }}>
            {mainData.podcastTitle}
            <ShareSocialButton
              sx={{
                position: 'absolute',
                top: isDesktopLayout ? '15px' : '305px',
                right: isDesktopLayout ? '464px' : '300px',
              }}
              socialIcons={socialIcons}
              shareUrl={shareUrl}
              isDesktopLayout={isDesktopLayout}
            />
          </Box>
          <Box>
            <PlaylistCarousel
              items={podcast}
              handleItemClick={handleItemClick}
              isDesktopLayout={isDesktopLayout}
            />
          </Box>
        </Box> */}
      </Box>
      <MusicDialog
        open={open}
        onClose={handleClose}
        item={selectedItem}
        isDesktopLayout={isDesktopLayout}
      />
    </Section>
  );
}

export default MusicSection;
