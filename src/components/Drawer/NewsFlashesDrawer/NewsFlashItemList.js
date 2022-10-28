import List from '@mui/material/List';
import { NewsFlashItem } from './NewsFlashItem';

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
