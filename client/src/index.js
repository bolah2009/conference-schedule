import React from 'react';
import './css/index.css';
import { render } from 'react-dom';
import register from './serviceWorker';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));

register();
