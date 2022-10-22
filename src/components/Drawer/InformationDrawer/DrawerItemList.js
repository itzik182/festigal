import { ShowItem } from './ShowItem';

export const DrawerItemList = (props) => {
  const { items, isDrawerOpen, handleItemClick, ticketsInformationText } =
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
