import React, { useState, useEffect } from 'react';
import Meta from 'components/Meta';
import NestedLayout from 'components/NestedLayout';
import Section from 'components/Section';
import { useWindowWidth } from '@react-hook/window-size';
import Contact from 'components/Contact';
import {
  getContactPage,
  getMainData,
  getTicketsInformationData,
  getSocialIcons,
  getAllNewsFlashes,
  getAllShows,
  getAllFaqs,
  getAllFooters,
  getMenuItems,
} from '../lib/datocms';

function ContactPage(props) {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 960;
  const [isDesktopLayout, setIsDesktopLayout] = useState(true);

  useEffect(() => {
    if (isDesktop !== isDesktopLayout) {
      setIsDesktopLayout(isDesktop);
    }
  }, [windowWidth]);

  const { mainData, contactPageData } = props;

  return (
    <>
      <Meta title='My Friends' />
      <Section
        size='auto'
        sx={{
          backgroundColor: '#000',
          width: '100%',
        }}>
        <Contact
          pageData={contactPageData}
          isDesktopLayout={isDesktopLayout}
        />
      </Section>
    </>
  );
}

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>;
};

export async function getStaticProps() {
  return {
    props: {
      contactPageData: (await getContactPage()) || [],
      mainData: (await getMainData()) || [],
      ticketsInformationData: (await getTicketsInformationData()) || [],
      socialIcons: (await getSocialIcons()) || [],
      newsFlashesItems: (await getAllNewsFlashes()) || [],
      showsItems: (await getAllShows()) || [],
      faqItems: (await getAllFaqs()) || [],
      footerItems: (await getAllFooters()) || [],
      menuItems: (await getMenuItems()) || [],
    },
  };
}
