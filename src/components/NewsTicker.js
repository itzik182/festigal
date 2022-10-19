import Section from './Section';
import Ticker from 'react-ticker';

export const NewsTicker = (props) => {
  const { item } = props;

  // const a = ['👑 ברוכים הבאים ל״פסטיגל על פסטיגל״ מקווים שהתגעגתם- כי אנחנו ממש', '💕 מוכנים? כי המסע לממלכת פנטזיה יוצא לדרך'];

  return (
    <Section
      sx={{
        padding: '52px 0 8px !important',
        background: '#F1ECE4 0% 0% no-repeat padding-box',
        height: '90px',
      }}>
      <Ticker direction={'toRight'} speed={5}>
        {({ index }) => (
          <>
            <span
              style={{
                fontSize: '0.9vw',
                fontWeight: 'bold',
                // fontFamily: "Noto Sans Hebrew",
                // fontWeight: 'normal',
                // fontStyle: 'normal',
              }}>
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
