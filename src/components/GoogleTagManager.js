import Script from 'next/script';

export const GoogleTagManager = (props) => {

  return (
    <>
      <Script
            id='google-tag-manager'
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', ${process.env.GA_TRACKING_ID});`,
            }}
          />
    </>
  );
};
