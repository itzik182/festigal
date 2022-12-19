import Box from '@material-ui/core/Box';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const RadiosGroup = (props) => {
  const { data, register, isDesktopLayout = true } = props;
  const { gender, genderFemale, genderMale, genderOther } = data;

  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: "row", 
      }}>
        <FormLabel
          sx={{
            color: '#fff',
            margin: isDesktopLayout ? '20px 22px 0 0px' : '20px 50px 0 0',
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
            columnGap: isDesktopLayout ? '20px' : '30px',
            color: '#fff !important',
            '& .MuiTypography-root': {
              fontFamily: 'Noto Sans Hebrew',
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
      </Box>
    </>
  );
};

export default RadiosGroup;
