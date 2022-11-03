import Box from '@material-ui/core/Box';
import CustomForm from './Form/CustomForm';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const MyFriends = (props) => {
  const { pageData, isDesktopLayout = true } = props;
  const {
    title,
    descriptionBold,
    description,
    registerText,
  } = pageData;

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
            'transparent linear-gradient(180deg, #950291 0%, #3D1D58 100%) 0% 0% no-repeat padding-box',
          boxShadow: '-23px 3px 22px #00000073',
          padding: isDesktopLayout ? '255px 60px 80px 140px' : '150px 0px 30px',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isDesktopLayout ? 'row' : 'column-reverse',
            justifyContent: 'space-between',
            margin: '0 0 40px',
            zIndex: '10',
            position: 'relative',
          }}>
          <Box
            sx={{
              margin: isDesktopLayout ? '94px 0 0' : '45px 0 0',
            }}>
            <Box
              sx={{
                textAlign: isDesktopLayout ? 'right' : 'center',
                font: isDesktopLayout
                  ? 'normal normal 900 2.365vw/2.102vw Noto Sans Hebrew'
                  : 'normal normal 900 27pt/2.102vw Noto Sans Hebrew',
                letterSpacing: '-0.23px',
                color: '#DBFE36',
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
                maxWidth: isDesktopLayout ? '768px' : '100%',
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
              zIndex: 10,
              textAlign: isDesktopLayout ? 'right' : 'center',
            }}>
            <img
              src='./images/friends.png'
              alt=''
              style={{
                height: 'auto',
                width: isDesktopLayout ? '95%' : '330px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            background:
              'transparent url(images/my-friends.png) 0% 0% no-repeat padding-box',
            top: '0',
            left: '0',
            width: isDesktopLayout ? '795px' : '100%',
            zIndex: '1',
            height: '100%',
            // mixBlendMode: 'soft-light',
            position: 'absolute',
            backgroundSize: isDesktopLayout ? 'cover' : 'contain',
            backgroundPositionX: isDesktopLayout ? '0%' : '-187px',
          }}></Box>
        <Box
          sx={{
            textAlign: isDesktopLayout ? 'right' : 'center',
            font: 'normal normal normal 35px/31px GveretLevinAlefAlefAlef',
            letterSpacing: '1.96px',
            color: '#DBFE36',
            margin: '0px 0px 50px',
            zIndex: 10,
            position: 'relative',
          }}>
          {registerText}
        </Box>
        <CacheProvider value={cacheRtl}>
          <CustomForm
            pageData={pageData}
            isMultiLineTextBox={false}
            isDesktopLayout={isDesktopLayout}
          />
        </CacheProvider>
      </Box>
      <Box
        sx={{
          background:
            'transparent linear-gradient(180deg, #3D1D58 0%, #000000 100%) 0% 0% no-repeat padding-box',
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

export default MyFriends;
