import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import Box from '@material-ui/core/Box';
import SocialIcons from 'components/SocialIcons';
import GoldButton from 'components/GoldButton';
import YoutubeChannel from 'components/YoutubeChannel';
import Separator from 'components/Separator';
import FooterColumn from 'components/FooterColumn';

const useStyles = makeStyles((theme) => ({
  link: {
    color: 'inherit',
    lineHeight: 1,
    '&:not(:last-of-type)': {
      marginRight: '1.2rem',
    },
  },
}));

function Footer(props) {
  const classes = useStyles();
  const {
    items,
    mainData,
    socialIcons,
    isDesktopLayout,
    setInformationDrawerOpen,
  } = props;

  const column1 = items?.filter((item) => item.column.columnNumber === 1);
  const column2 = items?.filter((item) => item.column.columnNumber === 2);
  const column3 = items?.filter((item) => item.column.columnNumber === 3);
  const column4 = items?.filter((item) => item.column.columnNumber === 4);
  const column5 = items?.filter((item) => item.column.columnNumber === 5);
  const column6 = items?.filter((item) => item.column.columnNumber === 6);

  return (
    <Section
      sx={{
        padding: '0 !important',
        width: '100%',
        // height: '428px',
        backgroundImage: `linear-gradient(
          180deg,
          hsl(187deg 47% 19%) 0%,
          hsl(187deg 49% 20%) 8%,
          hsl(187deg 51% 21%) 17%,
          hsl(187deg 52% 21%) 25%,
          hsl(187deg 52% 21%) 33%,
          hsl(187deg 52% 21%) 42%,
          hsl(187deg 52% 21%) 50%,
          hsl(187deg 53% 22%) 58%,
          hsl(187deg 54% 22%) 67%,
          hsl(187deg 54% 22%) 75%,
          hsl(187deg 60% 21%) 83%,
          hsl(186deg 68% 19%) 92%,
          hsl(186deg 93% 16%) 100%
        )`,
      }}>
      <Box
        sx={{
          padding: '0px 7% 50px 7%',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'Noto Sans Hebrew',
          color: '#fff',
          flexDirection: isDesktopLayout ? 'row' : 'column-reverse',
        }}>
        <Box
          sx={{
            width: '100%',
            padding: isDesktopLayout ? '85px 0 0 13.925vw' : '47px 0 0 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: isDesktopLayout ? '50px' : '0',
            }}>
            <Box
              sx={{
                display: 'flex',
                flex: '1',
                justifyContent: 'space-between',
                paddingLeft: isDesktopLayout ? '4vw' : '0',
                flexWrap: isDesktopLayout ? 'nowrap' : 'wrap',
              }}>
              <FooterColumn
                colId={'column1'}
                column={column1}
                isDesktopLayout={isDesktopLayout}
                sx={{
                  width: isDesktopLayout ? '100%' : '60%',
                  padding: isDesktopLayout ? '0 0 0 20px' : '0 0 25px',
                }}
              />
              <FooterColumn
                colId={'column2'}
                column={column2}
                isDesktopLayout={isDesktopLayout}
                sx={{
                  width: isDesktopLayout ? '100%' : '40%',
                  paddingLeft: isDesktopLayout ? '20px' : '0',
                }}
              />
              <FooterColumn
                colId={'column3'}
                column={column3}
                isDesktopLayout={isDesktopLayout}
                sx={{
                  width: isDesktopLayout ? '100%' : '60%',
                  paddingLeft: isDesktopLayout ? '20px' : '0',
                }}
              />
              <FooterColumn
                colId={'column4'}
                column={column4}
                isDesktopLayout={isDesktopLayout}
                sx={{
                  width: isDesktopLayout ? '100%' : '40%',
                  paddingLeft: isDesktopLayout ? '20px' : '0',
                }}
              />
            </Box>
            {isDesktopLayout && <YoutubeChannel mainData={mainData} />}
          </Box>
          <Separator color={'#B4B4B4'} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: isDesktopLayout ? 'initial' : 'center',
            }}>
            {column5.map((col) => {
              const { id, text, logo, logoSize, link, isBold } = col;
              const isBlank = link.includes('http');
              return (
                <Box
                  key={id || `column5_${index}`}
                  sx={{
                    marginBottom: isDesktopLayout ? '15px' : '25px',
                    marginLeft: '20px',
                    color: isBold && '#36D4DE',
                    fontSize: isBold
                      ? isDesktopLayout
                        ? '0.946vw'
                        : '18px'
                      : '12px',
                    fontWeight: isBold ? '400' : 'none',
                  }}>
                  <Link href={link}>
                    <a
                      target={isBlank ? '_blank' : '_self'}
                      rel='noopener noreferrer'>
                      {logo ? (
                        <img
                          src={logo.url}
                          title={logo.title}
                          alt={logo.alt}
                          style={{
                            width: logoSize,
                          }}
                        />
                      ) : (
                        text
                      )}
                    </a>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
              textAlign: isDesktopLayout ? 'initial' : 'center',
              flexDirection: isDesktopLayout ? 'initial' : 'column',
            }}>
            {column6.map((col, index) => {
              const { id, text, logo, logoSize, link, isBold } = col;
              const isBlank = link.includes('http');
              return (
                <Box
                  key={id || `column6_${index}`}
                  sx={{
                    display: 'contents',
                  }}>
                  <Box
                    sx={{
                      width: isDesktopLayout ? 'auto' : '100%',
                      color: '#47988C',
                      fontSize: '12px',
                      fontWeight: 'none',
                      marginBottom: isDesktopLayout ? '0' : '10px',
                    }}
                    dangerouslySetInnerHTML={{ __html: text }}></Box>{' '}
                  {isDesktopLayout && index !== column6.length - 1 && (
                    <span style={{ margin: '0 10px', color: '#47988C' }}>
                      |
                    </span>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Box
            sx={{
              padding: isDesktopLayout ? '80px 0px 54px' : '12px 0 40px',
            }}>
            <Link href='/'>
              <a>
                <img
                  style={{
                    width: '90%',
                  }}
                  src={
                    isDesktopLayout
                      ? './logo/logo-big.png'
                      : './mobile/logo/logo-big.png'
                  }
                  alt='Logo'
                />
              </a>
            </Link>
          </Box>
          {!isDesktopLayout && (
            <YoutubeChannel
              mainData={mainData}
              isDesktopLayout={isDesktopLayout}
            />
          )}
          {!isDesktopLayout && (
            <Separator margin={'32px 0'} color={'#B4B4B4'} />
          )}
          <SocialIcons
            items={socialIcons}
            style={{ margin: '0 10px 20px' }}
            isDesktopLayout={isDesktopLayout}
            isUseOriginalSize={isDesktopLayout ? true : false}
          />
          <Box
            sx={{
              marginTop: isDesktopLayout ? '0' : '20px',
            }}>
            <GoldButton
              sx={{
                width: isDesktopLayout ? '100%' : '250px',
                margin: isDesktopLayout ? '20px 0 0' : '20px auto 0',
                // height: '70px',
              }}
              buttonStyle={{
                padding: '15px 0px',
              }}
              isDesktopLayout={isDesktopLayout}
              text={mainData.ticketsInformationText}
              onClick={() => {
                setInformationDrawerOpen(true);
              }}
              // link={mainData.ticketsInformationLink}
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
}

export default Footer;
