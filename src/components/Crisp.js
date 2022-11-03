import React from 'react';
class Crisp extends React.Component {
    componentDidMount () {
      // Include the Crisp code here, without the <script></script> tags
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "f64db7de-7c72-40ea-9f36-2faac0582e16";
  
      (function() {
        var d = document;
        var s = d.createElement("script");
  
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    }
  
    render () {
      return null;
    }
  }
  export default Crisp