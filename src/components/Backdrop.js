import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const BackdropLoading = () => {
  return (
    <Backdrop
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000",
        zIndex: 1000000,
        opacity: "0.8 !important",
      }}
      open={true}
    >
      <img src='./logo/logo-web-small.png' />
      <img src='./images/Infinity.svg' style={{width: "130px"}} />
      {/* <CircularProgress color="primary" style={{'color': '#fff'}} /> */}
    </Backdrop>
  );
};
