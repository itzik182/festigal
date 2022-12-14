import { useState } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import Box from '@material-ui/core/Box';
import FormControl from '@mui/material/FormControl';
import TextFields from 'components/Form/TextFields';
import RadiosGroup from 'components/Form/RadiosGroup';
import CheckboxLabels from 'components/Form/CheckboxLabels';
import GoldButton from 'components/GoldButton';

const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthDate: '',
  city: '',
  gender: '',
  // marketing: false,
  // terms: false,
};

const CustomForm = (props) => {
  const [data, setData] = useState(null);
  const [isFormSent, setIsFormSent] = useState(false);
  const { register, handleSubmit, reset, errors, control } = useForm({
    // validationSchema: schema
    defaultValues,
  });

  const {
    pageData,
    isContactPage = false,
    isGender = true,
    isMultiLineTextBox = true,
    isBirthDate = true,
    isDesktopLayout = true,
  } = props;
  const { send } = pageData;

  const onSubmit = (data) => {
    // data.type = isContactPage ? 'צור קשר' : 'מועדון החברים';
    handleOnSubmit(data);
    setData(data);
    setIsFormSent(true);
    // console.log(data);
    reset(defaultValues);
    setTimeout(() => {
      setIsFormSent(false);
    }, 9000);
  };

  // Server State Handling

  const handleOnSubmit = (data) => {
    axios({
      method: 'POST',
      url: isContactPage
        ? 'https://formbold.com/s/91vB3'
        : 'https://formbold.com/s/9xXE9',
      data,
    })
      .then((r) => {
        console.log('hello');
      })
      .catch((r) => {
        console.log('error');
      });
  };

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
            width: isDesktopLayout ? (isContactPage ? '90%' : '80%') : '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'start',
            rowGap: isDesktopLayout
              ? isContactPage
                ? '50px'
                : '70px'
              : '50px',
            columnGap: isDesktopLayout
              ? isContactPage
                ? '50px'
                : '70px'
              : '50px',
          }}>
          <TextFields
            data={pageData}
            isBirthDate={isBirthDate}
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
              position: isDesktopLayout ? 'absolute' : 'initial',
              bottom: isContactPage ? '13px' : '-62px',
            }}>
            <CheckboxLabels
              register={register}
              isMarketing={true}
              isTerms={isContactPage ? false : true}
              isDesktopLayout={isDesktopLayout}
            />
          </Box>
          <Box
            sx={{
              width: isDesktopLayout ? 'auto' : '100%',
              marginTop: isContactPage ? (isDesktopLayout ? '61px' : '0') : '0',
              minHeight: isDesktopLayout ? '90px' : 'initial',
              minWidth: isDesktopLayout ? '228px' : 'initial',
            }}>
            {!isFormSent && <GoldButton
              isDesktopLayout={isDesktopLayout}
              sx={{
                marginTop: '8px',
              }}
              type='submit'
              buttonStyle={{ width: isDesktopLayout ? '228px' : '100%' }}
              text={send}
            />}
            <Box
              style={{
                transition: 'all .2s ease-in-out',
                color: '#fff',
                textAlign: 'center',
                margin: isDesktopLayout ? '18px 0 0' : '15px 0 0',
                fontSize: isDesktopLayout ? '22px' : '18px',
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

export default CustomForm;
