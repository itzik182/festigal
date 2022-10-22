import List from '@mui/material/List';
import { MenuItem } from './MenuItem';
import Box from '@material-ui/core/Box';
import InformationTicketButton from 'components/InformationTicketButton';

export const DrawerItemList = (props) => {
  const { items, isDrawerOpen, handleItemClick, ticketsInformationText } =
    props;

  return (
    <>
      <List
        sx={{
          marginRight: '5px',
          paddingTop: '0',
        }}>
        {items.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            handleItemClick={handleItemClick}
            isDrawerOpen={isDrawerOpen}
          />
        ))}
        <Box
          sx={{
            margin: '0 70px 0',
          }}>
          <InformationTicketButton text={ticketsInformationText} />
        </Box>
      </List>
    </>
  );
};
