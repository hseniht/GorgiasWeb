
import React from 'react';

const App = (props) => {
  return (
    <div>
      <img width="75" src="https://avatars1.githubusercontent.com/u/8445?v=4" />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontsize: '1.25em', fontWeight: 'bold'}}>
        Paul O’Shannessy
        </div>
        <div>Facebook</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
  return(
    <div>
      <Card />
    </div>
  )
}

export default App;
