import { ShowItem } from './ShowItem';

export const ShowItemList = (props) => {
  const { items, isDrawerOpen, isDesktopLayout = true } =
    props;

  return (
    <>
        {items.map((item) => (
          <ShowItem
            key={item.id}
            item={item}
            isDrawerOpen={isDrawerOpen}
            isDesktopLayout={isDesktopLayout}
          />
        ))}
    </>
  );
};
