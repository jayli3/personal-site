import { css } from 'styled-components';
import { sizes } from '../atoms/variables';


// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
	    @media only screen and (max-width: ${sizes[label] / 16}em) {
	      ${css(...args)}
	    }`
  return acc
}, {})