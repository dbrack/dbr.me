import * as React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		background: #0d1117;
		height: 100%;
		margin: 0;
		font: 16px Helvetica, sans-serif;
		color: #c9d1d9;
		height: 50vh;
		display: flex;
  		justify-content: center;
  		align-items: center;
	}
`;

const App = () => {
	return (
		<React.Fragment>
			<Header />
			<Navigation />
			<GlobalStyle />
		</React.Fragment>
	);
};

export default App;
