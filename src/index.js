import React from 'react';
import ReactDOM from 'react-dom';

// const API_KEY = 'AIzaSyDBnx4Ayi1n_0M5A7R7ctUyy7hwC5gKmVc';

// create a new component, this component
// should produce some HTML

const App = () => {
  return (
    <div>
      hi!
    </div>
  );
}

// take this component's generated HTML
// and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('#app'));
