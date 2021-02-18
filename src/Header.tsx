import * as React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Title = styled.h1`
	text-align: center;
	width: 100%;
	font-size: 3em;
`;

const TagLine = styled.span`
	font-size: 1em;
	line-height: 20px;
	&::before {
		content: open-quote;
		font-weight: bolder;
		color: #30363d;
		font-size: 1.6em;
	}
	&::after {
  	content: close-quote;
		font-weight: bolder;
		color: #30363d;
		font-size: 1.6em;
	}
`;

const Header = () => {
	return (
		<Section>
			<Title>Dominik Brack</Title>
			<TagLine>
				Lifelong learner. Agile thinker. Passionate web developer.
			</TagLine>
		</Section>
	);
};

export default Header;
