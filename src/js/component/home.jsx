import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./card";
import Footer from "./Footer";
import { cardContent } from "./cardContent";
import './styles.css'


//create your first component
const Home = () => {
	return (
		<>
			<NavBar />

			<Jumbotron />

			<div id="cardContainer" className="container d-flex flex-wrap gap-3 p-0 my-4 justify-content-between">
				{cardContent.map(content => (
					<Card 
						key={content.id}
						image={content.image}
						title={content.title}
						body={content.body}
					/>
				))}
			</div>

			<Footer />
		</>

	);
};

export default Home;
