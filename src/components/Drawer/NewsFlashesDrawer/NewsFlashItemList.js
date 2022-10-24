import List from '@mui/material/List';
import { NewsFlashItem } from './NewsFlashItem';
import Box from '@material-ui/core/Box';
import GoldButton from 'components/GoldButton';

export const NewsFlashItemList = (props) => {
  const { items, isDrawerOpen, allNewsFlashText, allNewsFlashLink } =
    props;

  return (
    <>
      <List
        sx={{
          marginTop: '58px',
          paddingTop: '0',
          paddingBottom: '124px',
        }}>
        {items.map((item) => (
          <NewsFlashItem
            key={item.id}
            item={item}
            isDrawerOpen={isDrawerOpen}
          />
        ))}
      </List>
    </>
  );
};
