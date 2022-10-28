const CloseButton = (props) => {
  const { setDrawerOpen, isDesktopLayout } = props;
  return (
    <img
      src='./images/close.svg'
      alt='close'
      onClick={() => setDrawerOpen(false)}
      style={{
        position: 'absolute',
        cursor: 'pointer',
        left: isDesktopLayout ? '37px' : '25px',
        top: isDesktopLayout ? '47px' : '25px',
        zIndex: 1,
      }}
    />
  );
};

export default CloseButton;
