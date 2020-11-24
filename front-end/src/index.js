import React from 'react';
import ReactDOM from 'react-dom';
import "react-alice-carousel/lib/alice-carousel.css";
import './stylesheets/index.css';
import App from './components/App';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { CaptureConsole } from '@sentry/integrations';

Sentry.init({
  dsn: "https://3db5c5a2202f43728777df0cabb5923c@o481327.ingest.sentry.io/5529747",
  integrations: [
    new Integrations.BrowserTracing(),
    new CaptureConsole({
      levels: ['error']
    })
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 0.2,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
