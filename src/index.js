import ReactDOM from 'react-dom';
import { createApp, createStore } from './app';

const store = createStore();
const app = createApp(store);

ReactDOM.render(app, document.getElementById('app'));
