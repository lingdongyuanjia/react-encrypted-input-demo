/*** examples/src/index.js ***/
import React from 'react';
import ReactDOM from 'react-dom/client';
import EncryptedInput from '../../src';
const App = () => (
    <EncryptedInput initValue="123456" front="2" />
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);