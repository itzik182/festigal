import TextField from '@mui/material/TextField';
import Box from '@material-ui/core/Box';
import { alpha, styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  textFields: {
    // '& .MuiFormControl-root': {
    width: '256px',
    marginLeft: '60px !important',
    '& input[type="date"]': {
      marginRight: '130px',
      colorScheme: 'dark',
    },
    '& input, & label': {
      color: '#fff',
      fontFamily: "Noto Sans Hebrew"
    },
    '&:nth-child(4)': {
      marginLeft: '0px !important',
    },
    '&:nth-child(6)': {
      marginLeft: '0px !important',
    },
    '&:hover .MuiInputBase-root:before, &:hover .MuiInputBase-root:after': {
      borderColor: '#fff !important',
    },
    '& label.MuiFormLabel-root': {
      color: '#fff',
    },
    '& .MuiInput-underline:before, & .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    // },
  },
}));

const TextFields = (props) => {
  const { data, register, isDesktopLayout = true } = props;
  const { firstName, lastName, phone, email, birthDate, city } = data;
  const classes = useStyles();

  // const CssTextField = styled(TextField)({
  //   width: '256px',
  //   marginRight: '60px',
  //   input: {
  //     color: '#fff',
  //   },
  //   ':nth-child(4), :nth-child(6)': {
  //     marginRight: '0px !important',
  //   },
  //   '&:hover .MuiInputBase-root:before, &:hover .MuiInputBase-root:after': {
  //     borderColor: '#fff !important',
  //   },
  //   '& label.MuiFormLabel-root': {
  //     color: '#fff',
  //   },
  //   '& .MuiInput-underline:before, & .MuiInput-underline:after': {
  //     borderBottomColor: '#fff',
  //   },
  // });

  return (
    <>
      <TextField
        className={classes.textFields}
        inputRef={register}
        required
        id='firstName'
        name='firstName'
        label={firstName}
        variant='standard'
        type='text'
      />
      <TextField
        className={classes.textFields}
        inputRef={register}
        required
        id='lastName'
        name='lastName'
        label={lastName}
        variant='standard'
      />
      <TextField
        className={classes.textFields}
        inputRef={register}
        required
        id='email'
        name='email'
        label={email}
        type='email'
        variant='standard'
      />
      <TextField
        className={classes.textFields}
        inputRef={register}
        required
        id='phone'
        name='phone'
        label={phone}
        type='tel'
        variant='standard'
      />
      <TextField
        className={classes.textFields}
        inputRef={register}
        required
        id='birthDate'
        name='birthDate'
        label={birthDate}
        type='date'
        variant='standard'
      />
      <TextField
        className={classes.textFields}
        inputRef={register}
        required
        id='city'
        name='city'
        label={city}
        type='text'
        variant='standard'
      />
    </>
  );
};

export default TextFields;
