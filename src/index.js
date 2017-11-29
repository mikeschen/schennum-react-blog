import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/style.css';
import App from './components/App';

const Root = () => {
	return (
		<BrowserRouter basename = "/reactblog">
			<div>
				<App />
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.querySelector('#main'));