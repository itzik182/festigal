import React from 'react';
import Link from 'next/link';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import LinkMui from '@material-ui/core/Link';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import { useDarkMode } from 'util/theme';
import Box from '@material-ui/core/Box';
import SocialIcons from 'components/SocialIcons';
import TicketButton from 'components/TicketButton';

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
  const { items, mainData, socialIcons } = props;

  const column1 = items?.filter((item) => item.column.columnNumber === 1);
  const column2 = items?.filter((item) => item.column.columnNumber === 2);
  const column3 = items?.filter((item) => item.column.columnNumber === 3);
  const column4 = items?.filter((item) => item.column.columnNumber === 4);
  const column5 = items?.filter((item) => item.column.columnNumber === 5);

  const darkMode = useDarkMode();
  // Use inverted logo if specified
  // and we are in dark mode
  const logo =
    props.logoInverted && darkMode.value ? props.logoInverted : props.logo;

  return (
    <Section
      sx={{
        padding: '0 !important',
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
          padding: '0 163px 50px 122px',
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'Noto Sans Hebrew',
          color: '#fff',
        }}>
        <Box
          sx={{
            width: '100%',
            padding: '85px 0 0 13.925vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '50px',
            }}>
            <Box
              sx={{
                display: 'flex',
                flex: '1',
                justifyContent: 'space-between',
                paddingLeft: '4vw',
              }}>
              <Box
                sx={{
                  width: '100%',
                  paddingLeft: '20px',
                }}>
                {column1.map((col) => {
                  const { id, text, link, isBold } = col;
                  const isBlank = link.includes('http');
                  return (
                    <Box
                      sx={{
                        marginBottom: '15px',
                        color: isBold && '#36D4DE',
                        fontSize: isBold ? '18px' : '12px',
                        fontWeight: isBold ? '400' : 'none',
                      }}>
                      <Link key={id} href={link}>
                        <a
                          target={isBlank ? '_blank' : '_self'}
                          rel='noopener noreferrer'>
                          {text}
                        </a>
                      </Link>
                    </Box>
                  );
                })}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  paddingLeft: '20px',
                }}>
                {column2.map((col) => {
                  const { id, text, link, isBold } = col;
                  const isBlank = link.includes('http');
                  return (
                    <Box
                      sx={{
                        marginBottom: '15px',
                        color: isBold && '#36D4DE',
                        fontSize: isBold ? '18px' : '12px',
                        fontWeight: isBold ? '400' : 'none',
                      }}>
                      <Link key={id} href={link}>
                        <a
                          target={isBlank ? '_blank' : '_self'}
                          rel='noopener noreferrer'>
                          {text}
                        </a>
                      </Link>
                    </Box>
                  );
                })}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  paddingLeft: '20px',
                }}>
                {column3.map((col) => {
                  const { id, text, link, isBold } = col;
                  const isBlank = link.includes('http');
                  return (
                    <Box
                      sx={{
                        marginBottom: '15px',
                        color: isBold && '#36D4DE',
                        fontSize: isBold ? '18px' : '12px',
                        fontWeight: isBold ? '400' : 'none',
                      }}>
                      <Link key={id} href={link}>
                        <a
                          target={isBlank ? '_blank' : '_self'}
                          rel='noopener noreferrer'>
                          {text}
                        </a>
                      </Link>
                    </Box>
                  );
                })}
              </Box>
              <Box
                sx={{
                  width: '100%',
                  paddingLeft: '20px',
                }}>
                {column4.map((col) => {
                  const { id, text, link, isBold } = col;
                  const isBlank = link.includes('http');
                  return (
                    <Box
                      sx={{
                        marginBottom: '15px',
                        color: isBold && '#36D4DE',
                        fontSize: isBold ? '18px' : '12px',
                        fontWeight: isBold ? '400' : 'none',
                      }}>
                      <Link key={id} href={link}>
                        <a
                          target={isBlank ? '_blank' : '_self'}
                          rel='noopener noreferrer'>
                          {text}
                        </a>
                      </Link>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
              }}>
              <Box
                sx={{
                  textAlign: 'center',
                  margin: '5px 0 0 19px',
                }}>
                <Box
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}>
                  {mainData.youtubeText}
                </Box>
                <Box
                  sx={{
                    fontSize: '27px',
                  }}>
                  {mainData.festigalYoutubeText}
                </Box>
              </Box>
              <Box>
                <a
                  href='https://www.youtube.com/c/myfestigalofficial/featured'
                  target='_blank'
                  rel='noreferrer'
                  className={classes.link}>
                  <img
                    src='./social-icons/youtube-logo.png'
                    alt='youtube-logo'
                  />
                </a>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              border: '1px solid #2A7D98',
            }}></Box>
          <Box sx={{ display: 'flex' }}>
            {column5.map((col) => {
              const { id, text, link, isBold } = col;
              const isBlank = link.includes('http');
              return (
                <Box
                  sx={{
                    marginBottom: '15px',
                    marginLeft: '20px',
                    color: isBold && '#36D4DE',
                    fontSize: isBold ? '18px' : '12px',
                    fontWeight: isBold ? '400' : 'none',
                  }}>
                  <Link key={id} href={link}>
                    <a
                      target={isBlank ? '_blank' : '_self'}
                      rel='noopener noreferrer'>
                      {text}
                    </a>
                  </Link>
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
          <Box>
            <Link href='/'>
              <a>
                <img src={logo} alt='Logo' className={classes.brand} />
              </a>
            </Link>
          </Box>
          <SocialIcons
            items={socialIcons}
            isUseOriginalSize={true}
            margin={'0 10px 20px'}
          />
          <TicketButton text={mainData.ticketsInformationText} />
        </Box>
      </Box>
    </Section>
  );
}

export default Footer;
