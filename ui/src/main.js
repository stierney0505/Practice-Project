import './app.css'
// @ts-ignore
import App from './App.svelte'; // Relative path to App.svelte

const app = new App({
  target: document.getElementById('app'),
})

export default app
