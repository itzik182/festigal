import React from 'react';
import Box from '@material-ui/core/Box';
import Faq from 'react-faq-component';

export const FaqItem = (props) => {
  const { item, handleItemClick, isDrawerOpen } = props;
  const {
    id,
    answer,
    question,
  } = item;

  const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

  return (
    <Box sx={{}}>
      <Faq data={data} styles={styles} config={config} />
    </Box>
  );
};
