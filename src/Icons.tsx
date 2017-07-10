import styled from 'styled-components';

/*
	Use `require` because `tsc` doesn't find the typings when imported from `lib`.
	We have to import it from `lib` because we use create-react-app
*/
const LinkedIn = require('react-icons/lib/fa/linkedin-square');
const Twitter = require('react-icons/lib/fa/twitter');
const GitHub = require('react-icons/lib/fa/github');

export const TwitterIcon = styled(Twitter) ``;
export const LinkedInIcon = styled(LinkedIn) ``;
export const GitHubIcon = styled(GitHub) ``;
