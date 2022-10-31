import { useState } from 'react';
import Select from '@material-ui/core/Select';
import { useForm, Controller } from 'react-hook-form';
import Box from '@material-ui/core/Box';
import FormControl from '@mui/material/FormControl';
import TextFields from 'components/Form/TextFields';
import RadiosGroup from 'components/Form/RadiosGroup';
import GoldButton from 'components/GoldButton';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDate: '',
  city: '',
  gender: '',
};

const MyFriendsForm = (props) => {
  const [data, setData] = useState(null);
  const [isFormSent, setIsFormSent] = useState(false);
  const { register, handleSubmit, reset, errors, control } = useForm({
    // validationSchema: schema
    defaultValues,
  });
  const onSubmit = (data) => {
    setData(data);
    setIsFormSent(true);
    console.log(data);
    reset(defaultValues);
    setTimeout(() => {
      setIsFormSent(false);
    }, 4000);
  };

  const { pageData, isDesktopLayout = true } = props;
  const { send } = pageData;

  return (
    <Box dir='rtl'>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          dir='rtl'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '78%',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'start',
            rowGap: '70px',
          }}>
          <TextFields data={pageData} register={register} />
          <RadiosGroup data={pageData} register={register} />
          <Box>
            <GoldButton
              sx={{
                marginTop: '8px',
              }}
              type='submit'
              buttonStyle={{ width: '228px' }}
              text={send}
              // link={registerLink}
            />
            <Box
              style={{
                transition: 'all .2s ease-in-out',
                color: '#fff',
                textAlign: 'center',
                margin: '5px 0 0',
                fontSize: '18px',
                fontFamily: 'Noto Sans Hebrew',
                opacity: isFormSent ? 1 : 0,
              }}>
              הטופס נשלח בהצלחה
            </Box>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default MyFriendsForm;
