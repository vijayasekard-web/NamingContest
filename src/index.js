import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import data from './testData';


      ReactDOM.render(
        <App initialContests={window.initialData.contests}/>,
        document.getElementById('root')
        );
      



// setTimeout(() => {
//   ReactDOM.render(
//     <h2>...</h2>,document.getElementById('root')
//     );
// },4000);