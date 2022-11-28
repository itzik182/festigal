import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href='/favicon.ico' rel='shortcut icon' />

          {/* Uncomment to add favicons for other platforms */}
          {/* These files can be generated with realfavicongenerator.net */}
          {/*
          <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
          <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
          <link href="/safari-pinned-tab.svg" rel="mask-icon" color="#4a9885" />
          <link href="/site.webmanifest" rel="manifest" />
          */}

          {/* Roboto Font */}
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />

            <link rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Noto Sans Hebrew" />

          {/* <Script
            id='chat'
            dangerouslySetInnerHTML={{
              __html: `<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="f64db7de-7c72-40ea-9f36-2faac0582e16";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>`,
            }}
          /> */}


{/* <script type="text/javascript">{`window.$crisp=[];window.CRISP_WEBSITE_ID="f64db7de-7c72-40ea-9f36-2faac0582e16";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`}</script> */}

          {/* <link rel="stylesheet" href="https://use.typekit.net/eit4grc.css"></link> */}

          {/* Global site tag (gtag.js) - Google Analytics */}
          {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-H26QJN2QS5"></script>
          <script>
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-H26QJN2QS5');`}
          </script> */}
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* <!-- Accessibility - myfestigal.net --> */}

          <script
            dangerouslySetInnerHTML={{
              __html: `window.interdeal = {
                sitekey   : "cf7aff12898f19fc79a224bd40cfdc0c",
                Position  : "Right",
                Menulang  : "HE",
                domains	 : {
                  js  : "https://js.nagich.co.il/",
                  acc : "https://access.nagich.co.il/"
                },	
                isPartial : true,
                btnStyle  : {
                    color : {
                        main   : "#122231",
                        second : "#fff"
                    },
                    vPosition : ["70%","15%"], //Y-axis position of the widget, left side is reffering to the desktop version, the right side is for mobile.
                    scale	  : ["0.5","0.4"], //Size of the widget, the left side is referring to the desktop version, the right side is for mobile.
                    icon	  : { 
                      type	: 10, //You can choose between 1- 14 icons, or set value as string like "Accessibility".
                      shape	: "circle", //You can choose the following shapes: "circle", "rectangle", "rounded", "semicircle".
                      outline	: true //true / false.
                    }
                  }
              };
              (function(doc, head, body){
                var coreCall             = doc.createElement('script');
                coreCall.src             = 'https://js.nagich.co.il/core/4.4.0/accessibility.js';
                coreCall.defer           = true;
                coreCall.integrity       = 'sha512-3lGJBcuai1J0rGJHJj4e4lYOzm7K08oEHsg1Llt7x24OOsa/Ca0wwbSi9HhWUn92FKN3fylaq9xmIKVZnUsT3Q==';
                coreCall.crossOrigin     = 'anonymous';
                coreCall.setAttribute('data-cfasync', true );
                body? body.appendChild(coreCall) : head.appendChild(coreCall);
              })(document, document.head, document.body);`,
            }}></script>
        </body>
      </Html>
    );
  }
}

// Server render Material UI styles for the current page
MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
