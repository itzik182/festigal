import { useState } from 'react';
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

  const {
    pageData,
    isContactPage = false,
    isGender = true,
    isMultiLineTextBox = true,
    isDesktopLayout = true,
  } = props;
  const { send } = pageData;

  return (
    <Box
      dir='rtl'
      sx={{
        zIndex: '10',
        position: 'relative',
        padding: isDesktopLayout ? '0' : '0 15px',
      }}>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          dir='rtl'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: isDesktopLayout ? isContactPage ? '90%' : '80%' : '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'start',
            rowGap: isDesktopLayout ? isContactPage ? '50px' : '70px' : '50px',
            columnGap: isDesktopLayout ? isContactPage ? '50px' : '70px' : '50px',
          }}>
          <TextFields
            data={pageData}
            isMultiLineTextBox={isMultiLineTextBox}
            register={register}
            isDesktopLayout={isDesktopLayout}
          />
          {isGender && (
            <RadiosGroup
              data={pageData}
              register={register}
              isDesktopLayout={isDesktopLayout}
            />
          )}
          <Box
            sx={{
              width: isDesktopLayout ? 'auto' : '100%',
              marginTop: isContactPage ? isDesktopLayout ? '61px' : '0' : '0',
            }}>
            <GoldButton
              isDesktopLayout={isDesktopLayout}
              sx={{
                marginTop: '8px',
              }}
              type='submit'
              buttonStyle={{ width: isDesktopLayout ? '228px' : '100%' }}
              text={send}
              // link={registerLink}
            />
            <Box
              style={{
                transition: 'all .2s ease-in-out',
                color: '#fff',
                textAlign: 'center',
                margin: isDesktopLayout ? '5px 0 0' : '15px 0 0',
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
