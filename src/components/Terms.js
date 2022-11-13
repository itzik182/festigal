import Box from '@material-ui/core/Box';

const Terms = (props) => {
  const { pageData, isDesktopLayout = true } = props;
  const { title, subTitle, text } = pageData;

  return (
    <>
      <Box
        sx={{
          background:
            'transparent linear-gradient(180deg, #FFFFFF 0%, #D8D8D8 100%) 0% 0% no-repeat padding-box',
          padding: isDesktopLayout
            ? '210px 246px 100px 226px'
            : '150px 0px 30px',
        }}>
        <Box
          sx={{
            font: 'normal normal 900 45px Noto Sans Hebrew',
            letterSpacing: '-0.23px',
            color: '#D08F20',
            padding: '35px 0',
          }}>
          {title}
        </Box>
        <Box
          sx={{
            font: 'normal normal bold 20px Noto Sans Hebrew',
            letterSpacing: '-0.36px',
            padding: '0 0 25px 0',
          }}>
          {subTitle}
        </Box>
        <Box
          sx={{
            font: 'normal normal normal 16px/20px Noto Sans Hebrew',
            letterSpacing: '0.11px',
          }}
          dangerouslySetInnerHTML={{ __html: text }}></Box>
      </Box>
    </>
  );
};

export default Terms;
