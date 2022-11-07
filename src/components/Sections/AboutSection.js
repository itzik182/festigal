import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
// import YoutubeEmbed from '../YoutubeEmbed';
import Vimeo from '@u-wave/react-vimeo';
import TextTruncate from 'react-text-truncate';
import { ShareSocialButton } from '../ShareSocialButton';

const useStyles = makeStyles((theme) => ({
  section: {
    width: '100%',
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
    '&.mobile': {
      padding: '70px 15px 30px',
    },
    '&.mobile .details': {
      fontSize: '18px',
      padding: '23px 0 20px',
    },
    '&.mobile .description': {
      textAlign: 'center',
      fontSize: '14px',
      paddingLeft: '0',
    },
    '&.mobile .containerA': {
      flexDirection: 'column',
    },
  },
  containerA: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
}));

function AboutSection(props) {
  const classes = useStyles();

  const mobileDescriptionLines = 5;
  const DesktopDescriptionLines = 1000;
  const [descriptionLinesNumber, setDescriptionLinesNumber] = useState(
    DesktopDescriptionLines
  );
  const { item, socialIcons, isDesktopLayout = true } = props;
  const { text, description, details, video, videoMobile, image } = item;

  useEffect(() => {
    if (isDesktopLayout) {
      setDescriptionLinesNumber(DesktopDescriptionLines);
    } else {
      setDescriptionLinesNumber(mobileDescriptionLines);
    }
  }, [isDesktopLayout]);

  const heandleReadMore = () => {
    if (mobileDescriptionLines === descriptionLinesNumber) {
      setDescriptionLinesNumber(DesktopDescriptionLines);
    } else {
      setDescriptionLinesNumber(mobileDescriptionLines);
    }
  };

  return (
    <Section id='about' className={classes.section}>
      <Box
        className={`${classes.container} ${isDesktopLayout ? '' : 'mobile'}`}>
        <Box className={`${classes.containerA} containerA`}>
          <Box
            sx={{
              maxWidth: '800px',
            }}>
            <Box
              sx={{
                textAlign: isDesktopLayout ? 'right' : 'center',
                margin: '0 0 20px',
              }}>
              <img
                src='./images/my-story.png'
                alt=''
                title=''
                style={{
                  height: 'auto',
                  width: '100%',
                  maxWidth: isDesktopLayout ? '397px' : '165px',
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
              className={'description'}
              sx={{
                color: '#fff',
                textAlign: 'right',
                // maxWidth: '740px',
                fontSize: '1.1vw',
                lineHeight: '1.65',
                paddingLeft: '40px',
                direction: 'rtl',
                // fontFamily: 'NotoSansHebrew',
                fontFamily: 'Noto Sans Hebrew',
              }}>
              {/* {description} */}
              <TextTruncate
                line={descriptionLinesNumber}
                element='span'
                truncateText='...'
                text={description}
                textTruncateChild={
                  isDesktopLayout ? (
                    ''
                  ) : (
                    <Box
                      onClick={() => heandleReadMore()}
                      sx={{ color: '#2C9DAC', fontSize: '16px' }}>
                      קרא עוד
                    </Box>
                  )
                }
              />
              {!isDesktopLayout &&
                mobileDescriptionLines !== descriptionLinesNumber && (
                  <Box
                    onClick={() => heandleReadMore()}
                    sx={{ color: '#2C9DAC', fontSize: '16px' }}>
                    קרא פחות
                  </Box>
                )}

              {/* {description.split('\n').map((line, i, arr) => {
                line = <span key={i}>{line}</span>;

                if (i === arr.length - 1) {
                  return line;
                } else {
                  return [line, <br key={i + 'br'} />];
                }
              })} */}
            </Box>
          </Box>
          <Box
            sx={{
              position: 'relative',
              marginTop: isDesktopLayout ? '0' : '25px',
            }}>
            <ShareSocialButton
              sx={{
                position: 'absolute',
                top: '20px',
                left: '10px',
              }}
              socialIcons={socialIcons}
              shareUrl={image.url}
              isDesktopLayout={isDesktopLayout}
            />
            <img
              style={{
                width: isDesktopLayout ? 'auto' : '100%',
              }}
              sizes='(min-width: 400px) 80vw, 100vw'
              srcset={`${image.url} 375w, ${image.url} 1500w`}
              src={image.url}
              alt={image.alt}
              title={image.title}
            />
            {/* <Box
              sx={{
                position: 'absolute',
                top: '77%',
                left: '87%',
                color: '#2a94a2',
              }}>
              <span
                style={{
                  fontFamily: 'GveretLevinAlefAlefAlef',
                  position: 'absolute',
                  bottom: '11%',
                  right: '16%',
                  textAlign: 'center',
                  fontSize: '1.104vw',
                  width: '42%',
                  transform: 'rotate(347deg)',
                }}>
                {text}
              </span>
              <img
                src='./images/Group7277.png'
                alt='Group7277'
                title=''
                style={{
                  width: '22vw',
                }}
              />
            </Box> */}
          </Box>
        </Box>
        <Box className={classes.containerB}>
          <Box
            className={'details'}
            sx={{
              textAlign: 'center',
              color: '#d08f20',
              fontSize: '2vw',
              lineHeight: '1.74',
              padding: '90px',
              direction: 'rtl',
              fontFamily: 'Noto Sans Hebrew',
            }}>
            {details}
          </Box>
        </Box>
        <Box>
          {/* <YoutubeEmbed url={videoId} width={'100%'} height={'796px'} /> */}
          {isDesktopLayout && (
            <Vimeo
              video={video.url}
              showTitle={false}
              loop={false}
              controls={true}
              autoplay={false}
              playsInline={true}
              height='796px'
              responsive='true'
            />
          )}
          {!isDesktopLayout && (
            <Vimeo
              video={videoMobile.url}
              showTitle={false}
              loop={false}
              controls={true}
              autoplay={false}
              playsInline={true}
              height='796px'
              responsive='true'
            />
          )}
        </Box>
      </Box>
    </Section>
  );
}

export default AboutSection;
