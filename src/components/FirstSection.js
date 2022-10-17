import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Section from 'components/Section';
import SectionHeader from 'components/SectionHeader';
import YoutubeEmbed from '../components/YoutubeEmbed';

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(3)}px`,
  },
  image: {
    margin: '0 auto',
    maxWidth: 570,
    display: 'block',
    height: 'auto',
    width: '100%',
  },
  section: {
    backgroundImage: `linear-gradient(
      180deg,
      hsl(187deg 50% 13%) 0%,
      hsl(186deg 52% 13%) 9%,
      hsl(186deg 54% 13%) 18%,
      hsl(185deg 55% 14%) 27%,
      hsl(185deg 57% 14%) 36%,
      hsl(185deg 60% 14%) 45%,
      hsl(186deg 63% 14%) 55%,
      hsl(186deg 66% 14%) 64%,
      hsl(185deg 73% 15%) 73%,
      hsl(184deg 81% 15%) 82%,
      hsl(183deg 91% 16%) 91%,
      hsl(181deg 100% 16%) 100%
    )`,
    padding: '0',
  },
  container: {
    background:
      'transparent url(./background/stars1.png) 0% 0% repeat padding-box',
    padding: '100px 65px',
  },
  containerA: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
}));

function FirstSection(props) {
  const classes = useStyles();

  return (
    <Section className={classes.section}>
      <Box className={classes.container}>
        <Box className={classes.containerA}>
          <Box sx={{
            position: 'relative',
          }}>
            <img src='./images/image-60.png' alt='' title='' style={{
                // height: 'auto',
                // width: '100%',
                // maxWidth: '677px',
              }} />
            <Box
                sx={{
                  position: "absolute", 
                  top: "680px", 
                  left: "590px",
                  color: '#2a94a2',
                }}>
                  <span style={{
                      position: "absolute", 
                      top: "184px", 
                      left: "135px", 
                      transform: "rotate(347deg)"
                  }}>...מקווים שהתגעגעתם כי אנחנו ממש</span>
                <img src='./images/Group7277.png' alt='' title='' style={{
                      maxWidth: '380px'
                }} />
              </Box>
          </Box>
          <Box sx={{
            maxWidth: '800px',
          }}>
            <Box
              sx={{
                textAlign: 'right',
                margin: '0 0 20px 0',
              }}>
              <img src='./images/my-story.png' alt='' title=''  style={{
                height: 'auto',
                width: '100%',
                maxWidth: '397px',
              }} />
            </Box>
            <Box
              sx={{
                textAlign: 'right',
                margin: '0 -60px 20px',
              }}>
              <img src='./images/image1.png' alt='' title='' style={{
                height: 'auto',
                width: '100%',
                maxWidth: '565px',
              }} />
            </Box>
            <Box
              sx={{
                color: '#fff',
                textAlign: 'right',
                // maxWidth: '740px',
                fontSize: '1.1vw',
                lineHeight: '1.65',
                paddingLeft: '40px',
              }}>
              בפעם הראשונה, שיאנית הפסטיגלים, אליאנה תדהר, מקבלת הזדמנות לביים
              את המופע הענק, זאת לאחר שחנוך רוזן, במאי הפסטיגל המיתולוגי, קיבל
              הצעה לביים את טקס פרסי המוסיקה במילאנו. אליאנה נחושה להתמודד עם
              המשימה המסובכת כשלצידה עוזרת הבמאי הוותיקה (בת אל בורנשטיין), שני
              מוכרי מרצ’נדייז מנוסים (אסי ישראלוף וציון ברוך) ונבחרת כוכבים
              מטורפת: עדן חסון, אנה זק, אגם בוחבוט, לינוי אשרם, עומר חזן, שחר
              סאול, אברהם ארנסון ועידן תלם. האם היא תצליח במשימה להרים את המופע
              הגדול בישראל? איך היא תתמודד עם זינה (שלום מיכאלשווילי) -
              הכוריאוגרפית החדשה של הפסטיגל שיש לה תוכניות משלה? ועם מנכ”לית
              הפסטיגל הקשוחה (סנדרה שדה)? את כל התהליך מתעדת יעל סקופ (יעל
              אלקנה) כתבת התחקירים שמדווחת על כל הקשיים בהפקה המחודשת, ויש בלי
              סוף, ורגע לפני שהיא מתייאשת, היא מוצאת את עצמה יחד עם כוכבי
              הפסטיגל ביקום מקביל - בממלכה האבודה, הממלכה שכיכבה באחד הפסטיגלים
              האהובים והאייקוניים בתולדות הפסטיגל (2006). אליאנה והחברים פוגשים
              שוב את מלכת הקור החלופית, הנסיכה, לוחמת האור, הנסיך ואת זמר הממלכה
              ויחד נקלעים לשלל הרפתקאות מטורפות. האם בסופן יהיה לנו פסטיגל?
            </Box>
          </Box>
        </Box>
        <Box className={classes.containerB}>
          <Box
            sx={{
              textAlign: 'center',
              color: '#d08f20',
              fontSize: '2vw',
              lineHeight: '1.74',
              padding: '90px',
            }}>
            מסר הפסטיגל: "תהיה עצמך, כל שאר האנשים כבר תפוסים" אמר אוסקר וויילד.
            הנתיב האישי של כל אחד ואחת מאיתנו, הוא זה שיביא לנו את ההצלחה. הצורך
            לרצות את הסביבה עלול להרחיק אותנו לא פעם מהלב שלנו, ומהיכולת לעמוד
            בזכות עצמנו. להקשיב לניסיונם של אחרים זה חשוב, אבל להיות נאמן לעצמך
            זה חשוב אפילו יותר – כך סיפר.
          </Box>
        </Box>
        <Box>
          <YoutubeEmbed url={'iCAKpASnFgw'} width={'100%'} height={'796px'} />
        </Box>
      </Box>
    </Section>
  );
}

export default FirstSection;
