import { ShowItem } from './ShowItem';

export const ShowItemList = (props) => {
  const { items, isDrawerOpen, handleItemClick } =
    props;

  return (
    <>
        {items.map((item) => (
          <ShowItem
            key={item.id}
            item={item}
            handleItemClick={handleItemClick}
            isDrawerOpen={isDrawerOpen}
          />
        ))}
    </>
  );
};
