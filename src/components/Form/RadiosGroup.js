import Box from '@material-ui/core/Box';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   textFields: {
//     // '& .MuiFormControl-root': {
//     width: '256px',
//     marginLeft: '60px !important',
//     '& input[type="date"]': {
//       marginRight: '130px',
//       colorScheme: 'dark',
//     },
//     '& input': {
//       color: '#fff',
//       // colorScheme: 'dark',
//     },
//     ':nth-child(4), :nth-child(6)': {
//       marginRight: '0px !important',
//     },
//     '&:hover .MuiInputBase-root:before, &:hover .MuiInputBase-root:after': {
//       borderColor: '#fff !important',
//     },
//     '& label.MuiFormLabel-root': {
//       color: '#fff',
//     },
//     '& .MuiInput-underline:before, & .MuiInput-underline:after': {
//       borderBottomColor: '#fff',
//     },
//     // },
//   },
// }));

const RadiosGroup = (props) => {
  const { data, register, isDesktopLayout = true } = props;
  const {
    gender,
    genderFemale,
    genderMale,
    genderOther,
  } = data;
//   const classes = useStyles();

  return (
    <>
      <FormLabel
        sx={{
          color: '#fff',
          margin: '20px 22px 0 15px',
          '&.Mui-focused': {
            color: '#fff',
          },
        }}
        id='demo-radio-buttons-group-label'>
        {gender}
      </FormLabel>

      <RadioGroup
        name='radio'
        inputRef={register}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: '11px',
          columnGap: '50px',
          color: '#fff !important',
          '& .MuiTypography-root': {
            fontFamily: "Noto Sans Hebrew",
          },
          '& .MuiButtonBase-root': {
            color: '#fff !important',
          },
          color: '#fff',
          '&.Mui-checked': {
            color: '#fff',
          },
        }}
        aria-labelledby='demo-radio-buttons-group-label'
        defaultValue={genderMale}>
        <FormControlLabel
          inputRef={register}
          name='gender'
          value={genderMale}
          control={<Radio />}
          label={genderMale}
        />
        <FormControlLabel
          inputRef={register}
          name='gender'
          value={genderFemale}
          control={<Radio />}
          label={genderFemale}
        />
        <FormControlLabel
          inputRef={register}
          name='gender'
          value={genderOther}
          control={<Radio />}
          label={genderOther}
        />
      </RadioGroup>
    </>
  );
};

export default RadiosGroup;
