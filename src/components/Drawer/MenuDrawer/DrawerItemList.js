import List from '@mui/material/List';
import { MenuItem } from './MenuItem';
import Box from '@material-ui/core/Box';
import GoldButton from 'components/GoldButton';

export const DrawerItemList = (props) => {
  const { items, isDrawerOpen, handleItemClick, ticketsInformationText, ticketsInformationLink } =
    props;

  return (
    <>
      <List
        sx={{
          marginRight: '5px',
          paddingTop: '0',
          height: 'auto',
        }}>
        {items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            handleItemClick={handleItemClick}
            isDrawerOpen={isDrawerOpen}
          />
        ))}
      </List>
      <Box
          sx={{
            margin: '0 70px 0',
            position: 'relative',
            // position: "absolute", 
            // width: "100%", 
            padding: "15px 0", 
            //bottom: "20px",
          }}>
          <GoldButton text={ticketsInformationText} link={ticketsInformationLink} />
        </Box>
    </>
  );
};
