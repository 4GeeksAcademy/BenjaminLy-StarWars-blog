import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img src="https://gray-kwch-prod.cdn.arcpublishing.com/resizer/FbV6jRtAPIjhkSqttsuUXwZql7s=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/4ALOBDTT3RJ3BOCBIWYK5JGYYM.jpg"/></span>
			</Link>
			<div className="ml-auto p-2">
				<button className="btn btn-primary dropdown-toggle"
				>Favorites <span>{store.favorites.length}</span></button>
			</div>
		</nav>
	);
};
