import React, { Suspense } from 'react';
import 'semantic-ui-css/semantic.min.css'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './component/i18'
  
ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback="...loading">
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);