import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

export default function CheckboxLabels(props) {
  const router = useRouter();
  const { register, isMarketing, isTerms, isDesktopLayout = true } = props;

  return (
    <FormGroup>
      {isMarketing && (
        <FormControlLabel
          inputRef={register}
          name='Marketing'
          control={
            <Checkbox
              sx={{
                color: '#fff',
                '&.Mui-checked': {
                  color: '#fff',
                },
              }}
            />
          }
          label={
            <Typography style={{ color: '#fff', fontSize: '0.8rem' }}>
              אני מאשר קבלת עדכונים ומסרים שיווקיים ופרסומיים
            </Typography>
          }
        />
      )}
      {isTerms && (
        <FormControlLabel
          required
          inputRef={register}
          name='Terms'
          control={
            <Checkbox
              required
              sx={{
                color: '#fff',
                '&.Mui-checked': {
                  color: '#fff',
                },
              }}
            />
          }
          label={
            <Typography style={{ color: '#fff', fontSize: '0.8rem' }}>
              אני מאשר כי קראתי את{' '}
              <Link href={'/terms'}>
                <a
                  target={'_blank'}
                  style={{
                    color: '#06a6bb',
                    textDecoration: 'underline',
                  }}>
                  התקנון ואת מדיניות הפרטיות
                </a>
              </Link>{' '}
              של האתר ואני מסכים לתנאיהם
            </Typography>
          }
        />
      )}
    </FormGroup>
  );
}
