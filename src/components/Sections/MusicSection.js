import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import PlaylistCarousel from '../Carousel/PlaylistCarousel';
import MusicDialog from '../MusicDialog';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
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
  },
  mediumText: {
    fontSize: '2.312vw',
    fontFamily: 'Noto Sans Hebrew',
    fontWeight: '400',
    fontStyle: 'normal',
  },
  rectangle: {
    boxShadow: '0px 0px 7px #FFD284',
    border: '1px solid #A2711D',
    borderRadius: '2px',
  },
}));

function MusicSection(props) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const classes = useStyles();
  const { items, mainData } = props;

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Section id='playlists' className={classes.section}>
      <Box className={classes.container}>
        <Box
          sx={{
            padding: '190px 11.193vw 0',
            background:
              'transparent url(./background/image47.png) no-repeat padding-box',
          }}>
          <Box
            sx={{
              position: 'absolute',
              top: '355px',
              left: '485px',
            }}>
            <span
              style={{
                fontFamily: 'GveretLevinAlefAlefAlef',
                position: 'absolute',
                top: '46px',
                left: '100px',
                transform: 'rotate(349deg)',
                fontSize: '24px',
                color: '#fff',
              }}>
              {mainData.festigalSongWriter}
            </span>
            <img
              src='./images/Group6746.png'
              alt=''
              title=''
              style={{
                maxWidth: '380px',
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              marginBottom: '25px',
            }}>
            <Box
              sx={{
                color: '#fff',
              }}>
              <Box
                sx={{
                  fontSize: '1.524vw',
                  fontFamily: 'GveretLevinAlefAlefAlef',
                }}>
                {mainData.festigalSong}
              </Box>
              <Box
                sx={{
                  fontSize: '4.467vw',
                  fontFamily: 'Noto Sans Hebrew',
                  fontWeight: '800',
                  fontStyle: 'normal',
                }}>
                {mainData.festigalSongName}
              </Box>
              <Box
                className={classes.mediumText}
                sx={{
                  fontSize: '1.944vw',
                }}>
                {mainData.festigalSongSinger}
              </Box>
            </Box>
            <Box>
              <a
                href='https://www.youtube.com/watch?v=iCAKpASnFgw'
                target='_blank'>
                <img
                  style={{
                    cursor: 'pointer',
                  }}
                  src='./images/play.png'
                  alt='play'
                />
              </a>
            </Box>
          </Box>
          <Box className={classes.rectangle}></Box>
        </Box>
        <Box className={classes.containerA}>
          <Box
            className={classes.mediumText}
            sx={{
              fontSize: '2.312vw',
              padding: '0 0 50px',
            }}>
            {mainData.playlistTitle}
          </Box>
          <Box>
            <PlaylistCarousel items={items} handleItemClick={handleItemClick} />
          </Box>
          <Box
            className={classes.mediumText}
            sx={{
              fontSize: '2.312vw',
              padding: '100px 0 50px',
            }}>
            {mainData.podcastTitle}
          </Box>
          <Box>
            <PlaylistCarousel items={items} handleItemClick={handleItemClick} />
          </Box>
        </Box>
      </Box>
      <MusicDialog open={open} onClose={handleClose} item={selectedItem} />
    </Section>
  );
}

export default MusicSection;
