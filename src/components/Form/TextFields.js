import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  textFields: {
    // '& .MuiFormControl-root': {
    width: '256px',
    // marginLeft: '60px !important',
    '&.multiline': {
      marginLeft: '30px !important',
      '& textarea': {
        lineHeight: '30px !important',
      },
      '&.mobile': {
        width: '100%',
        marginLeft: '0px !important',
      },
    },
    '&.mobile': {
      width: '100%',
      // marginLeft: '0px !important',
    },
    '& input[type="date"]': {
      marginRight: '130px',
      colorScheme: 'dark',
    },
    '& input, & label, textarea': {
      color: '#fff',
      fontFamily: 'Noto Sans Hebrew',
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
  const { data, register, isMultiLineTextBox, isDesktopLayout = true } = props;
  const { firstName, lastName, phone, email, birthDate, city, details } = data;
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
        className={`${classes.textFields} ${isDesktopLayout ? '' : 'mobile'}`}
        inputRef={register}
        required
        id='firstName'
        name='firstName'
        label={firstName}
        variant='standard'
        type='text'
      />
      <TextField
        className={`${classes.textFields} ${isDesktopLayout ? '' : 'mobile'}`}
        inputRef={register}
        required
        id='lastName'
        name='lastName'
        label={lastName}
        variant='standard'
      />
      <TextField
        className={`${classes.textFields} ${isDesktopLayout ? '' : 'mobile'}`}
        inputRef={register}
        required
        id='email'
        name='email'
        label={email}
        type='email'
        variant='standard'
      />
      <TextField
        className={`${classes.textFields} ${isDesktopLayout ? '' : 'mobile'}`}
        inputRef={register}
        required
        id='phone'
        name='phone'
        label={phone}
        type='tel'
        variant='standard'
      />
      <TextField
        className={`${classes.textFields} ${isDesktopLayout ? '' : 'mobile'}`}
        inputRef={register}
        required
        id='birthDate'
        name='birthDate'
        label={birthDate}
        type='date'
        variant='standard'
      />
      <TextField
        className={`${classes.textFields} ${isDesktopLayout ? '' : 'mobile'}`}
        inputRef={register}
        required
        id='city'
        name='city'
        label={city}
        type='text'
        variant='standard'
      />
      {isMultiLineTextBox && (
        <Box
          sx={{
            position: 'relative',
            width: isDesktopLayout ? 'auto' : '100%',
          }}>
          <TextField
            className={`${classes.textFields} ${
              isDesktopLayout ? 'multiline' : 'multiline mobile'
            }`}
            inputRef={register}
            required
            id='details'
            name='details'
            label={details}
            multiline
            rows={3}
            variant='standard'
          />
          <Box
            sx={{
              width: '100%',
              position: 'relative',
            }}>
            <Box
              sx={{
                position: 'absolute',
                width: isDesktopLayout ? '90%' : '100%',
                bottom: '68px',
                borderBottom: '1px solid #fff',
              }}></Box>
            <Box
              sx={{
                position: 'absolute',
                width: isDesktopLayout ? '90%' : '100%',
                bottom: '33px',
                borderBottom: '1px solid #fff',
              }}></Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default TextFields;
