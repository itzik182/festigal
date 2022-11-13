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
            ? '210px 295px 100px 226px'
            : '100px 50px 30px',
        }}>
        <Box
          sx={{
            fontFamily: 'Noto Sans Hebrew',
            fontWeight: '900',
            fontSize: isDesktopLayout ? '45px' : '35px',
            letterSpacing: '-0.23px',
            color: '#D08F20',
            padding: isDesktopLayout ? '35px 0' : '20px 0px',
          }}>
          {title}
        </Box>
        <Box
          sx={{
            fontFamily: 'Noto Sans Hebrew',
            fontWeight: '900',
            fontSize: isDesktopLayout ? '20px' : '18px',
            letterSpacing: '-0.36px',
            padding: isDesktopLayout ? '0 0 25px 0' : '0 0 10px 0',
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
