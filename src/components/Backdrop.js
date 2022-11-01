import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const BackdropLoading = () => {
  return (
    <Backdrop
      sx={{
        backgroundColor: "rgba(104,164,250,0.74)",
        zIndex: 1000000,
        opacity: "0.7 !important",
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
