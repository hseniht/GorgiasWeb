import React from 'react';
import DownloadApp from './Components/sections/DownloadApp.js';
import Feeter from './Components/sections/Feeter.js';
import WhyBecomeGorgias from './Components/sections/WhyBecomeGorgias.js';
import Storyland from './Components/sections/Storyland.js';
import TestArrayMapping from './Components/sections/TestArrayMapping.js';
// import Footer from './Footer.js';
//COMPONENT : Footer
class WrapperBody extends React.Component {
   render() {
      return (

        <div>
            <TestArrayMapping />
            <Storyland />
            <WhyBecomeGorgias />
            <DownloadApp/>
            <Feeter/>
        </div>
      );
   }
}

export default WrapperBody;
