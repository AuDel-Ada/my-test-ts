import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'

Bugsnag.start({
  apiKey: '79fc84da51e63e3f9c21be17772fc9a4',
  plugins: [new BugsnagPluginReact()]
})

// Check https://bobbyhadz.com/blog/typescript-object-is-possibly-undefined
const ErrorBoundary = Bugsnag.getPlugin('react')!.createErrorBoundary(React)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);

Bugsnag.notify(new Error('Test error'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
