import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Card } from "../component/card";


export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="background container-fluid" style={{backgroundImage: `url("https://wallpapers.com/images/hd/star-wars-space-background-1920-x-1080-f1o3qr8zm0z4662c.jpg")`}}>
			<div className="container p-1">
				<h2>People</h2>
				<div className="row overflow-scroll flex-nowrap">
				{store.characters.map((item, idx) => (
					<Card item={item} key={idx} idx={idx} category="characters"/>
				))}
				</div>
				<h2>Vehicles</h2>
				<div className="row overflow-scroll flex-nowrap">
				{store.vehicles.map((item, idx) => (
					<Card item={item} key={idx} idx={idx} category="vehicles"/>
				))}
				</div>
			<h2>Planets</h2>
			<div className="row overflow-scroll flex-nowrap">
				{store.planets.map((item, idx) => (
					<Card item={item} key={idx} idx={idx} category="planets"/>
				))}
				</div>
			<h2>Starships</h2>
			<div className="row overflow-scroll flex-nowrap">
				{store.starships.map((item, idx) => (
					<Card item={item} key={idx} idx={idx} category="starships"/>
				))}
				</div>
			<h2>Species</h2>
			<div className="row overflow-scroll flex-nowrap">
				{store.species.map((item, idx) => (
					<Card item={item} key={idx} idx={idx} category="species"/>
				))}
				</div>
		</div>
	</div>
)}
