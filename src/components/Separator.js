import Box from '@material-ui/core/Box';

const Separator = (props) => {
    const {color = '#2A7D98', margin = '25px 0' } = props;
  return (
    <Box
      sx={{
        border: `1px solid ${color}`,
        margin,
      }}></Box>
  );
};

export default Separator;
