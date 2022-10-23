import Box from '@material-ui/core/Box';
import Faq from 'react-faq-component';

export const FaqItemList = (props) => {
  const { items, isDrawerOpen, handleItemClick } = props;

  if (!items) {
    return <></>;
  }

  const styles = {
    bgColor: 'transparent',
    arrowColor: '#fff',
    titleTextColor: '#fff',
    rowTitleColor: '#fff',
    rowContentColor: '#fff',
    rowContentTextSize: '22px',
    rowContentTextSize: '16px',
    rowContentPaddingRight: '55px',
    rowContentPaddingBottom: '20px',
  };

  const config = {
    animate: false,
    arrowIcon: 'V',
    tabFocus: true,
    expandIcon: '+',
    collapseIcon: '-',
  };

  const data = {
    // title: "FAQ (How it works)",
    rows: items,
  };

  return (
    <>
      {/* {items.map((item) => (
        <FaqItem
          key={item.id}
          item={item}
          handleItemClick={handleItemClick}
          isDrawerOpen={isDrawerOpen}
        />
      ))} */}
      <Box
        sx={{
          color: 'black !important',
          '& .faq-row-wrapper': {
            '.& faq-body': {
              '.& faq-row': {
                '.& row-title': {
                  '.& row-title-text': {
                    fontSize: '40px !important',
                    color: '#000 !important',
                  },
                },
              },
            },
          },
        }}>
        <Faq data={data} styles={styles} config={config} />
      </Box>
    </>
  );
};
