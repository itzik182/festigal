import Section from './Section';
import Ticker from 'react-ticker';

export const NewsTicker = (props) => {
  const { item } = props;

  // const a = ['👑 ברוכים הבאים ל״פסטיגל על פסטיגל״ מקווים שהתגעגתם- כי אנחנו ממש', '💕 מוכנים? כי המסע לממלכת פנטזיה יוצא לדרך'];

  return (
    <Section sx={{paddingBottom: '0 !important'}}>
        <Ticker direction={'toRight'} speed={5}>
          {({ index }) => (
            <>
            <span style={{fontSize: '0.9vw', fontWeight: 'bold'}}>
              {item.text}
            </span>
              {/* <h1>👑 ברוכים הבאים ל״פסטיגל על פסטיגל״ מקווים שהתגעגתם- כי אנחנו ממש</h1>
              <h1>💕 מוכנים? כי המסע לממלכת פנטזיה יוצא לדרך</h1> */}
              {/* <img src='www.my-image-source.com/' alt='' /> */}
            </>
          )}
        </Ticker>
    </Section>
  );
};

export default Ticker;
