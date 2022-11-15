import React, { useState, useEffect } from 'react';
import Meta from 'components/Meta';
import NestedLayout from 'components/NestedLayout';
import Section from 'components/Section';
import { useWindowWidth } from '@react-hook/window-size';
import TextPage from 'components/TextPage';
import {
  getTermsPage,
  getMainData,
  getTicketsInformationData,
  getSocialIcons,
  getAllNewsFlashes,
  getAllShows,
  getAllFaqs,
  getAllFooters,
  getMenuItems,
} from '../lib/datocms';

function TermsPage(props) {
  const windowWidth = useWindowWidth();
  const isDesktop = windowWidth >= 960;
  const [isDesktopLayout, setIsDesktopLayout] = useState(true);

  useEffect(() => {
    if (isDesktop !== isDesktopLayout) {
      setIsDesktopLayout(isDesktop);
    }
  }, [windowWidth]);

  const { mainData, termsPageData } = props;

  return (
    <>
      <Meta title='Terms' />
      <Section
        size='auto'
        sx={{
          backgroundColor: '#000',
          width: '100%',
        }}>
        <TextPage pageData={termsPageData} isDesktopLayout={isDesktopLayout} />
      </Section>
    </>
  );
}

export default TermsPage;

TermsPage.getLayout = function getLayout(page) {
  return <NestedLayout>{page}</NestedLayout>;
};

export async function getStaticProps() {
  return {
    props: {
      termsPageData: (await getTermsPage()) || [],
      mainData: (await getMainData()) || [],
      ticketsInformationData: (await getTicketsInformationData()) || [],
      socialIcons: (await getSocialIcons()) || [],
      newsFlashesItems: (await getAllNewsFlashes()) || [],
      showsItems: (await getAllShows()) || [],
      faqItems: (await getAllFaqs()) || [],
      footerItems: (await getAllFooters()) || [],
      menuItems: (await getMenuItems()) || [],
    },
    revalidate: 30,
  };
}
