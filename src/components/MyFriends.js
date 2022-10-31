import Box from '@material-ui/core/Box';
import MyFriendsForm from './Form/MyFriendsForm';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const MyFriends = (props) => {
  const { pageData, isDesktopLayout = true } = props;
  const {
    id,
    title,
    descriptionBold,
    description,
    firstName,
    lastName,
    phone,
    email,
    city,
    registerText,
    gender,
    genderFemale,
    genderMale,
    genderOther,
    send,
  } = pageData;

  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <Box
      sx={{
        background:
          'transparent linear-gradient(180deg, #950291 0%, #3D1D58 100%) 0% 0% no-repeat padding-box',
        boxShadow: '-23px 3px 22px #00000073',
        padding: isDesktopLayout ? '255px 60px 80px 140px' : '90px 0px 60px',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktopLayout ? 'row' : 'column',
          justifyContent: 'space-between',
          margin: '0 0 40px',
        }}>
        <Box
          sx={{
            margin: '94px 0 0',
          }}>
          <Box
            sx={{
              textAlign: 'right',
              font: 'normal normal 900 2.365vw/2.102vw Noto Sans Hebrew',
              letterSpacing: '-0.23px',
              color: '#DBFE36',
            }}>
            {title}
          </Box>
          <Box
            sx={{
              letterSpacing: '-0.15px',
              color: '#FFFFFF',
              textAlign: isDesktopLayout ? 'right' : 'center',
              font: isDesktopLayout
                ? 'normal normal normal 1.576vw/2.302vw Noto Sans Hebrew'
                : 'normal normal normal 20pt Noto Sans Hebrew',
              maxWidth: isDesktopLayout ? '768px' : '100%',
              margin: isDesktopLayout ? '35px 0 0 0' : '35px 18px',
            }}>
            <Box dangerouslySetInnerHTML={{ __html: descriptionBold }}></Box>
            {description}
          </Box>
        </Box>
        <Box sx={{
          zIndex: 10,
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
      {isDesktopLayout && (
        <Box
          sx={{
            background:
              'transparent url(images/my-friends.png) 0% 0% no-repeat padding-box',
            top: '0',
            left: '0',
            width: '795px',
            zIndex: '1',
            height: '100%',
            // mixBlendMode: 'soft-light',
            position: 'absolute',
          }}></Box>
      )}
      <Box
        sx={{
          textAlign: 'right',
          font: 'normal normal normal 35px/31px GveretLevinAlefAlefAlef',
          letterSpacing: '1.96px',
          color: '#DBFE36',
          margin: '0 0 88px',
        }}>
        {registerText}
      </Box>
      <CacheProvider value={cacheRtl}>
        <MyFriendsForm pageData={pageData} />
      </CacheProvider>
    </Box>
  );
};

export default MyFriends;
