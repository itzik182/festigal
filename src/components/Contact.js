import Box from '@material-ui/core/Box';
import MyFriendsForm from './Form/MyFriendsForm';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const Contact = (props) => {
  const { pageData, isDesktopLayout = true } = props;
  const { title, descriptionBold, description, writeUsText } = pageData;

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <>
      <Box
        sx={{
          background:
            'transparent linear-gradient(180deg, #1A2021 0%, #03474E 100%) 0% 0% no-repeat padding-box',
          padding: isDesktopLayout ? '255px 60px 80px 247px' : '150px 0px 30px',
        }}>
        <Box
          sx={{
            // display: 'flex',
            // flexDirection: isDesktopLayout ? 'row' : 'column-reverse',
            // justifyContent: 'space-between',
            margin: '0 0 40px',
            zIndex: '10',
            position: 'relative',
          }}>
          <Box
            sx={{
              textAlign: isDesktopLayout ? 'right' : 'center',
              font: isDesktopLayout
                ? 'normal normal 900 2.365vw/2.102vw Noto Sans Hebrew'
                : 'normal normal 900 27pt/2.102vw Noto Sans Hebrew',
              letterSpacing: '-0.23px',
              color: '#D08F20',
              margin: isDesktopLayout ? '0' : '10px auto 10px',
            }}>
            {title}
          </Box>
          <Box
            sx={{
              letterSpacing: '-0.15px',
              color: '#FFFFFF',
              textAlign: isDesktopLayout ? 'right' : 'right',
              font: isDesktopLayout
                ? 'normal normal normal 1.576vw/2.302vw Noto Sans Hebrew'
                : 'normal normal normal 16pt Noto Sans Hebrew',
              // maxWidth: isDesktopLayout ? '768px' : '100%',
              margin: isDesktopLayout ? '35px 0 0 0' : '35px 18px 10px',
            }}>
            <Box
              sx={{
                fontSize: isDesktopLayout ? 'unset' : '18px',
              }}
              dangerouslySetInnerHTML={{ __html: descriptionBold }}></Box>
            {description}
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: isDesktopLayout ? 'right' : 'center',
            font: 'normal normal normal 35px/31px GveretLevinAlefAlefAlef',
            letterSpacing: '1.96px',
            color: '#fff',
            margin: '0px 0px 50px',
            zIndex: 10,
            position: 'relative',
          }}>
          {writeUsText}
        </Box>
        <CacheProvider value={cacheRtl}>
          <MyFriendsForm
            pageData={pageData}
            isContactPage={true}
            isGender={false}
            isMultiLineTextBox={true}
            isDesktopLayout={isDesktopLayout}
          />
        </CacheProvider>
      </Box>
      <Box
        sx={{
          background:
            'transparent linear-gradient(180deg, #15282A 0%, #000000 100%) 0% 0% no-repeat padding-box;',
          opacity: '0.63',
          filter: 'blur(16px)',
          width: '100%',
          height: isDesktopLayout ? '474px' : '70%',
          position: 'absolute',
          bottom: '0',
          zIndex: 1,
        }}></Box>
    </>
  );
};

export default Contact;
