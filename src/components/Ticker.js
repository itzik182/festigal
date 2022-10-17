import Container from '@material-ui/core/Container';
import Section from './Section';
import Ticker from 'react-ticker';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    // padding: `0 ${theme.spacing(3)}px`,
  },
  image: {
    margin: '0 auto',
    maxWidth: 570,
    display: 'block',
    height: 'auto',
    width: '100%',
  },
}));

export const MoveStuffAround = ({ url }) => {
  const classes = useStyles();

  const a = ['👑 ברוכים הבאים ל״פסטיגל על פסטיגל״ מקווים שהתגעגתם- כי אנחנו ממש', '💕 מוכנים? כי המסע לממלכת פנטזיה יוצא לדרך'];

  return (
    <Section sx={{paddingBottom: '0 !important'}}>
      {/* <Container className={classes.container}> */}
        <Ticker direction={'toRight'} speed={5}>
          {({ index }) => (
            <>
            <span style={{fontSize: '1.1em', fontWeight: 'bold'}}>מוכנים? כי המסע לממלכת פנטזיה יוצא לדרך! 👑 ברוכים הבאים לפסטיגל על פסטיגל מקווים שהתגעגתם- כי אנחנו ממש 💕 מוכנים? כי המסע לממלכת פנטזיה יוצא לדרך! 👑 ברוכים הבאים לפסטיגל על פסטיגל מקווים שהתגעגתם כי אנחנו ממש 💕</span>
              {/* <h1>👑 ברוכים הבאים ל״פסטיגל על פסטיגל״ מקווים שהתגעגתם- כי אנחנו ממש</h1>
              <h1>💕 מוכנים? כי המסע לממלכת פנטזיה יוצא לדרך</h1> */}
              {/* <img src='www.my-image-source.com/' alt='' /> */}
            </>
          )}
        </Ticker>
      {/* </Container> */}
    </Section>
  );
};

export default MoveStuffAround;
