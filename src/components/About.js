import Box from '@material-ui/core/Box';
import Image from 'next/image';

const About = (props) => {
  const { aboutData, isDesktopLayout = true } = props;
  const { id, text1, text2, image1, image2 } = aboutData;
  //   const {
  //     id: image1Id,
  //     image1Alt,
  //     image1Height,
  //     image1Width,
  //     image1Url,
  //     image1Title,
  //   } = image1;
  //   const {
  //     id: image2Id,
  //     image2Alt,
  //     image2Height,
  //     image2Width,
  //     image2Url,
  //     image2Title,
  //   } = image2;

  return (
    <Box
      sx={{
        background:
          'transparent linear-gradient(0deg, #268590 0%, #3D1D58 100%) 0% 0% no-repeat padding-box',
        padding: isDesktopLayout ? '163px 73px 186px 0' : '90px 0px 60px',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktopLayout ? 'row' : 'column',
          justifyContent: 'space-between',
        }}>
        <Box
          sx={{
            margin: isDesktopLayout ? '0 0 0 100px' : '0',
            textAlign: isDesktopLayout ? 'right' : 'center',
          }}>
          <Box>
            <img
              src='./images/my_big.png'
              alt=''
              style={{
                height: 'auto',
                width: isDesktopLayout ? '95%' : '330px',
              }}
            />
          </Box>
          <Box
            sx={{
              letterSpacing: '-0.15px',
              color: '#FFFFFF',
              textAlign: isDesktopLayout ? 'right' : 'center',
              font: isDesktopLayout
                ? 'normal normal normal 1.576vw/2.302vw Noto Sans Hebrew'
                : 'normal normal normal 20pt Noto Sans Hebrew',
              maxWidth: isDesktopLayout ? '850px' : '100%',
              margin: isDesktopLayout ? '60px 0 0 0' : '35px 18px',
            }}>
            {text1}
          </Box>
        </Box>
        <Box
          sx={{
            margin: isDesktopLayout ? '0' : '0 5px',
          }}>
          <img
            style={{
              width: isDesktopLayout ? 'auto' : '100%',
              height: isDesktopLayout ? '49.08vw' : 'auto',
              width: isDesktopLayout ? '45.927vw' : '100%',
            }}
            // sizes='(min-width: 400px) 70vw, 100vw'
            // srcset={`${image1.url} 875w, ${image1.url} 1300w`}
            src={image1.url}
            alt={image1.alt}
            title={image1.title}
          />
        </Box>
      </Box>
      {!isDesktopLayout && (
        <Box
          sx={{
            background:
              'url("images/my_back.svg") -65px 38% / 150% no-repeat padding-box padding-box transparent',
            width: '100%',
            height: '60%',
            mixBlendMode: 'soft-light',
            backgroundSize: '140% !important',
            position: 'absolute',
            backgroundPositionX: '-15px',
          }}></Box>
      )}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktopLayout ? 'row' : 'column-reverse',
          justifyContent: 'space-between',
        }}>
        <Box
          sx={{
            margin: isDesktopLayout ? '-60px 0 0' : '0 5px',
            zIndex: '1',
          }}>
          <img
            style={{
              width: isDesktopLayout ? 'auto' : '100%',
              height: isDesktopLayout ? '37.31vw' : 'auto',
              width: isDesktopLayout ? '32.948vw' : '100%',
            }}
            src={image2.url}
            alt={image2.alt}
            title={image2.title}
          />
        </Box>
        <Box
          sx={{
            letterSpacing: '-0.15px',
            color: '#FFFFFF',
            textAlign: isDesktopLayout ? 'right' : 'center',
            font: isDesktopLayout
              ? 'normal normal normal 1.576vw/2.302vw Noto Sans Hebrew'
              : 'normal normal normal 20pt Noto Sans Hebrew',
            maxWidth: isDesktopLayout ? '850px' : '100%',
            margin: isDesktopLayout ? '86px 90px 0 30px' : '35px 18px',
          }}>
          {text2}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
