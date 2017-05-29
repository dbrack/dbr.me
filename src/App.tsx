import * as React from 'react';
import Header from './Header';
import BottomNavigation from './BottomNavigation';
import {injectGlobal} from 'styled-components';

/* tslint:disable:no-unused-expression */
injectGlobal`
	body {
		background: #252525;
		height: 100%;
		margin: 0;
		font: 16px Helvetica, sans-serif;
		color: #efefef;
		height: 50vh;
		display: flex;
  	justify-content: center;
  	align-items: center;
	}
`;
/* tslint:enable:no-unused-expression */

const App = () => {
	return (
		<div>
			<Header />
			<BottomNavigation />
		</div>
	);
};

export default App;
