import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar-light bg-light mb-3">
		<nav className="navbar container">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://gray-kwch-prod.cdn.arcpublishing.com/resizer/FbV6jRtAPIjhkSqttsuUXwZql7s=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4ALOBDTT3RJ3BOCBIWYK5JGYYM.jpg"/></span>
			</Link>
			<div className="ml-auto p-2 dropdown">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
				>Favorites <span>{store.favorites.length}</span></button>
				<ul className="dropdown-menu">
					<li className="dropdown-item">
					<h6>Characters</h6>
					{store.favorites.filter((item, index) => item.category == 'characters').map((item, index) =>{
						return (
							<div className="navbar">
								<span>{item.item.name}</span>
								<span onClick={() => actions.updateFavorites(item.item, item.category)}><i class="fa-solid fa-trash-can"></i></span>
							</div>
						)
					})}
				</li>
				<li className="dropdown-item">
					<h6>Vehicles</h6>
					{store.favorites.filter((item, index) => item.category == 'vehicles').map((item, index) =>{
						return (
							<div className="navbar">
								<span>{item.item.name}</span>
								<span onClick={() => actions.updateFavorites(item.item, item.category)}><i class="fa-solid fa-trash-can"></i></span>
							</div>
						)
					})}
				</li>
				<li className="dropdown-item">
					<h6>Planets</h6>
					{store.favorites.filter((item, index) => item.category == 'planets').map((item, index) =>{
						return (
							<div className="navbar">
								<span>{item.item.name}</span>
								<span onClick={() => actions.updateFavorites(item.item, item.category)}><i class="fa-solid fa-trash-can"></i></span>
							</div>
						)
					})}
				</li>
				<li className="dropdown-item">
					<h6>Starships</h6>
					{store.favorites.filter((item, index) => item.category == 'starships').map((item, index) =>{
						return (
							<div className="navbar">
								<span>{item.item.name}</span>
								<span onClick={() => actions.updateFavorites(item.item, item.category)}><i class="fa-solid fa-trash-can"></i></span>
							</div>
						)
					})}
				</li>
				<li className="dropdown-item">
					<h6>Species</h6>
					{store.favorites.filter((item, index) => item.category == 'species').map((item, index) =>{
						return (
							<div className="navbar">
								<span>{item.item.name}</span>
								<span onClick={() => actions.updateFavorites(item.item, item.category)}><i class="fa-solid fa-trash-can"></i></span>
							</div>
						)
					})}
				</li>
				</ul>
			</div>
		</nav>
		</nav>
	);
};

{/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}