import React, {Component} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {
	color_hero_1,
	color_hero_2,
	color_grey_1
} from '../atoms/variables'

import font_bold from '../fonts/StratumNo1 Bold.ttf';
import font_heavy from '../fonts/StratumNo1 Heavy.ttf';
import font_light from '../fonts/StratumNo1 Light.ttf';
import font_medium from '../fonts/StratumNo1 Medium.ttf';
import font_regular from '../fonts/StratumNo1 Regular.ttf';
import font_thin from '../fonts/StratumNo1 Thin.ttf';

import Particles from 'react-particles-js';
import particlesOptions from './particlesjs-config';
import Navbar from '../components/navbar/navbar';
import Hero from '../components/hero/hero';
import Profile from '../components/profile/profile';
import Technologies from '../components/technologies/technologies';
import Portfolio from '../components/portfolio/portfolio';
import Experiences from '../components/experiences/experiences';
import Extracurricular from '../components/extracurricular/extracurricular';
import MySystem from '../components/mySystem/mySystem';
import Footer from '../components/footer/footer';



const GlobalStyle = createGlobalStyle`
	@font-face {
	    font-family: "Stratum";
	    src: url('${font_bold}');
	    font-weight: 500;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_heavy}');
	    font-weight: 600;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_light}');
	    font-weight: 200;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_medium}');
	    font-weight: 400;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_regular}');
	    font-weight: 300;
	}

	@font-face {
	    font-family: "Stratum";
	    src: url('${font_thin}');
	    font-weight: 100;
	}

	*,
	*::before,
	*::after{
		margin: 0;
		padding: 0;
		box-sizing: inherit;
		font-weight: inherit;
	}

	html{
		//so that 1rem = 10px since default was 1rem = 16px. 10px/16px = 62.5%
		font-size: 62.5%;
		color: ${color_grey_1};
		box-sizing: border-box;
		font-family: "Stratum", "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		font-weight: 300;
		line-height: 1;
	}

	body{
		min-height: 300vh;
	}
`;

const Stars = styled.div`
	background-color: ${color_hero_1};
	background-image: linear-gradient(to bottom, ${color_hero_1}, ${color_hero_2});
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -10;
`;

class App extends Component {
	render(){
		return(
			<>
				<Stars>
					<Particles params={particlesOptions}/>
				</Stars>
				<GlobalStyle/>
					<Navbar/>

					<span id='home'></span>
					<Hero/>

					<span id='about'></span>
					<Profile/>

					<span id='skills'></span>
					<Technologies/>

					<span id='portfolio'></span>
					<Portfolio/>

					<span id='experiences'></span>
					<Experiences/>

					<span id='outside'></span>
					<Extracurricular/>

					<span id='mySystem'></span>
					<MySystem/>

					<Footer/>
			</>
		)
	}
}

export default App;
