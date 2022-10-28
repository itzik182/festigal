import { ShowItem } from './ShowItem';

export const ShowItemList = (props) => {
  const { items, isDrawerOpen, isDesktopLayout = true, arrivalText } =
    props;

  return (
    <>
        {items.map((item) => (
          <ShowItem
            key={item.id}
            item={item}
            arrivalText={arrivalText}
            isDrawerOpen={isDrawerOpen}
            isDesktopLayout={isDesktopLayout}
          />
        ))}
    </>
  );
};
