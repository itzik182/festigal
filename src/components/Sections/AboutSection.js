import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import YoutubeEmbed from '../YoutubeEmbed';

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: `linear-gradient(
      180deg,
      hsl(187deg 50% 13%) 0%,
      hsl(186deg 52% 13%) 9%,
      hsl(186deg 54% 13%) 18%,
      hsl(185deg 55% 14%) 27%,
      hsl(185deg 57% 14%) 36%,
      hsl(185deg 60% 14%) 45%,
      hsl(186deg 63% 14%) 55%,
      hsl(186deg 66% 14%) 64%,
      hsl(185deg 73% 15%) 73%,
      hsl(184deg 81% 15%) 82%,
      hsl(183deg 91% 16%) 91%,
      hsl(181deg 100% 16%) 100%
    )`,
    padding: '0',
  },
  container: {
    background:
      'transparent url(./background/stars1.png) 0% 0% repeat padding-box',
    padding: '100px 65px',
  },
  containerA: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
}));

function AboutSection(props) {
  const classes = useStyles();
  const { item } = props;

  const videoId = item?.video?.url?.substring(
    item?.video?.url.indexOf('=') + 1
  );

  return (
    <Section id='about' className={classes.section}>
      <Box className={classes.container}>
        <Box className={classes.containerA}>
        <Box
            sx={{
              maxWidth: '800px',
            }}>
            <Box
              sx={{
                textAlign: 'right',
                margin: '0 0 20px',
              }}>
              <img
                src='./images/my-story.png'
                alt=''
                title=''
                style={{
                  height: 'auto',
                  width: '100%',
                  maxWidth: '397px',
                }}
              />
            </Box>
            {/* <Box
              sx={{
                textAlign: 'right',
                margin: '0 -60px 20px',
              }}>
              <img
                src='./images/image1.png'
                alt=''
                title=''
                style={{
                  height: 'auto',
                  width: '100%',
                  maxWidth: '565px',
                }}
              />
            </Box> */}
            <Box
              sx={{
                color: '#fff',
                textAlign: 'right',
                // maxWidth: '740px',
                fontSize: '1.1vw',
                lineHeight: '1.65',
                paddingLeft: '40px',
                direction: 'rtl',
                // fontFamily: 'NotoSansHebrew',
                fontFamily: "Noto Sans Hebrew",
              }}>
              {item.description}
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
            }}>
              <img
              src='./images/image-60.png'
              alt=''
              title=''
              style={
                {
                  // height: 'auto',
                  // width: '100%',
                  // maxWidth: '677px',
                }
              }
            />
            <Box
              sx={{
                position: 'absolute',
                top: '680px',
                left: '590px',
                color: '#2a94a2',
              }}>
              <span
                style={{
                  fontFamily: 'GveretLevinAlefAlefAlef',
                  position: 'absolute',
                  top: '184px',
                  left: '135px',
                  transform: 'rotate(347deg)',
                }}>
                {item.text}
              </span>
              <img
                src='./images/Group7277.png'
                alt=''
                title=''
                style={{
                  maxWidth: '380px',
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box className={classes.containerB}>
          <Box
            sx={{
              textAlign: 'center',
              color: '#d08f20',
              fontSize: '2vw',
              lineHeight: '1.74',
              padding: '90px',
              direction: 'rtl',
              fontFamily: "Noto Sans Hebrew",
            }}>
            {item.details}
          </Box>
        </Box>
        <Box>
          <YoutubeEmbed url={videoId} width={'100%'} height={'796px'} />
        </Box>
      </Box>
    </Section>
  );
}

export default AboutSection;
