import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(

<App />, document.getElementById('root'));

serviceWorker.unregister();

// ReactDOM.render(
//     <React.StrictMode>
//       <AuthContextProvider>
//         <App />
//       </AuthContextProvider>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );