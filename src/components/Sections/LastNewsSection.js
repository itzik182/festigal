import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import ImageNews from 'components/ImageNews';
import SocialIcons from 'components/SocialIcons';
import LastNewsCarousel from 'components/Carousel/LastNewsCarousel';

const useStyles = makeStyles((theme) => ({
  section: {
    padding: '0',
    width: '100%',
  },
  container: {
    background: '#fff',
    padding: '100px 195px 130px',
    '&.mobile': {
      padding: '50px 0px',
    },
  },
}));

function LastNewsSection(props) {
  const classes = useStyles();
  const { items, mainData, socialIcons, isDesktopLayout = true } = props;
  const { lastNewsText, lastNewsTitle, lastNewsImage } = mainData;

  if (!items) {
    return <></>;
  }

  return (
    <Section id='last-news' className={classes.section}>
      <Box
        className={`${classes.container} ${isDesktopLayout ? '' : 'mobile'}`}>
        <Box
          sx={{
            padding: isDesktopLayout ? '0' : '0 40px',
            color: '#000000',
            fontSize: isDesktopLayout ? '31px' : '25px',
            textAlign: 'center',
            fontFamily: 'GveretLevinAlefAlefAlef',
            lineHeight: isDesktopLayout ? '0.9' : '1.5',
            letterSpacing: isDesktopLayout ? '1.74px' : '1.4px',
          }}>
          {lastNewsText}
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            marginTop: '30px',
            // color: '#2D555B',
            // fontSize: isDesktopLayout ? '73px' : '35px',
            // fontFamily: 'Noto Sans Hebrew',
            // fontWeight: '900',
            // fontStyle: 'normal',
          }}>
          {/* {lastNewsTitle} */}
          <img
            src={lastNewsImage.url}
            alt={lastNewsImage.alt}
            title={lastNewsImage.title}
          />
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            padding: isDesktopLayout ? '30px 0 25px' : '25px 0px 50px',
          }}>
          <SocialIcons
            isDesktopLayout={isDesktopLayout}
            items={socialIcons}
            isUseOriginalSize={false}
            style={{ backgroundColor: '#2D555B', margin: '0 15px' }}
          />
        </Box>
        {isDesktopLayout ? (
          <ImageNews
            items={items}
            socialIcons={socialIcons}
            isDesktopLayout={isDesktopLayout}
          />
        ) : (
          <LastNewsCarousel items={items} socialIcons={socialIcons} />
        )}
      </Box>
    </Section>
  );
}

export default LastNewsSection;
