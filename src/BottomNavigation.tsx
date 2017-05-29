import * as React from 'react';
import styled from 'styled-components';
// import Section from './Section';
import {TwitterIcon, GitHubIcon, LinkedInIcon} from './Icons';

const Navigation = styled.nav`
	text-align: center;
	font-size: 2em;
	width: 100%;
`;

const NavigationList = styled.ul`
	list-style: none;
`;

const NavigationItem = styled.li`
	display: inline-block;
	width: 50px;
	height: 50px;
`;

const NavigationLink = styled.a`
	color: #444343;
	&:hover,
	&:active {
		color: #efefef;
	}
	transition: 250ms cubic-bezier(.44,.39,.65,.94);
	transform-origin: bottom;
`;

const BottomNavigation = () => {
	return (
		<Navigation>
			<NavigationList>
				<NavigationItem>
					<NavigationLink href="https://linkedin.com/in/dominik-brack" title="LinkedIn" rel="me">
						<LinkedInIcon />
					</NavigationLink>
				</NavigationItem>
				<NavigationItem>
					<NavigationLink href="https://github.com/dbrack" title="Github" rel="me">
						<GitHubIcon />
					</NavigationLink>
				</NavigationItem>
				<NavigationItem>
					<NavigationLink href="https://twitter.com/_bracky" title="Twitter" rel="me">
						<TwitterIcon />
					</NavigationLink>
				</NavigationItem>
			</NavigationList>
		</Navigation>
	);
};

export default BottomNavigation;
