import List from '@mui/material/List';
import { MenuItem } from './MenuItem';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import GoldButton from 'components/GoldButton';
import Separator from 'components/Separator';
import SocialIcons from 'components/SocialIcons';

export const DrawerItemList = (props) => {
  const {
    items,
    isDrawerOpen,
    handleItemClick,
    socialIcons,
    ticketsInformationText,
    ticketsInformationLink,
    allNewsFlashMenuText,
    setNewsFlashesDrawerOpen,
    isDesktopLayout,
  } = props;

  return (
    <>
      <Box
        sx={{
          maxHeight: isDesktopLayout ? '100%' : 'calc(100% - 230px)',
          overflow: isDesktopLayout ? 'initial' : 'auto',
        }}>
        <List
          sx={{
            marginRight: '5px',
            paddingTop: '25px',
            height: 'auto',
          }}>
          {items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              handleItemClick={handleItemClick}
              isDrawerOpen={isDrawerOpen}
              isDesktopLayout={isDesktopLayout}
            />
          ))}
        </List>
        <Box
          sx={{
            margin: '0 70px 0',
            position: 'relative',
            padding: '15px 0',
          }}>
          <GoldButton
            text={ticketsInformationText}
            link={ticketsInformationLink}
          />
        </Box>
      </Box>
      {!isDesktopLayout && (
        <Box
          sx={{
            background: '#03474E',
            position: 'fixed',
            bottom: '0',
            right: '0',
            width: '95%',
            height: '230px',
          }}>
          <Separator color={'#B4B4B4'} />
          <Box
            sx={{
              textAlign: 'center',
              marginBottom: '15px',
            }}>
            <SocialIcons
              items={socialIcons}
              isUseOriginalSize={true}
              style={{ margin: '0 15px' }}
            />
          </Box>
          <Box
            sx={{
              color: '#C0A042',
              background: '#000000',
              height: '55pt',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '0 15px',
            }}>
            <IconButton
              onClick={() => {
                setNewsFlashesDrawerOpen(true);
              }}
              color='inherit'>
              <img src='./images/ring.svg' alt='Ring' />
            </IconButton>
            <span
              style={{
                font: 'normal normal 900 18pt Noto Sans Hebrew',
              }}>
              {allNewsFlashMenuText}
            </span>
          </Box>
        </Box>
      )}
    </>
  );
};
