import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./card";


//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotron />
			<Card />
		</div>

	);
};

export default Home;
