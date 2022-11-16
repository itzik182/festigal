import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const BackdropLoading = () => {
  return (
    <Backdrop
      sx={{
        backgroundColor: "#000",
        zIndex: 1000000,
        opacity: "0.8 !important",
      }}
      open={true}
    >
      <img src='./images/Infinity.svg' />
      {/* <CircularProgress color="primary" style={{'color': '#fff'}} /> */}
    </Backdrop>
  );
};
