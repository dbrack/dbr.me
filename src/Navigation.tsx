import * as React from 'react';
import styled from 'styled-components';
import { TwitterIcon, GitHubIcon, LinkedInIcon } from './Icons';

const StyledNavigation = styled.nav`
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
	color: #30363d;
	&:hover,
	&:active {
		color: #6e7681;
	}
	transition: 250ms cubic-bezier(.44,.39,.65,.94);
	transform-origin: bottom;
`;

const Navigation = () => {
	return (
		<StyledNavigation>
			<NavigationList>
				<NavigationItem>
					<NavigationLink
						href="https://linkedin.com/in/dominikbrack"
						title="LinkedIn"
						rel="me"
					>
						<LinkedInIcon />
					</NavigationLink>
				</NavigationItem>
				<NavigationItem>
					<NavigationLink
						href="https://github.com/dbrack"
						title="Github"
						rel="me"
					>
						<GitHubIcon />
					</NavigationLink>
				</NavigationItem>
				<NavigationItem>
					<NavigationLink
						href="https://twitter.com/_bracky"
						title="Twitter"
						rel="me"
					>
						<TwitterIcon />
					</NavigationLink>
				</NavigationItem>
			</NavigationList>
		</StyledNavigation>
	);
};

export default Navigation;
