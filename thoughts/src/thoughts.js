import './css/index.scss';

import App from './App.svelte';
const appElem = document.getElementById('thoughts');
const app = new App({
	target: appElem,
	props: {}
});

export default app;