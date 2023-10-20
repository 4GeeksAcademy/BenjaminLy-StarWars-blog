import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Card = (props) => {
	return (		
		  <div className='col-sm-3'>
			<div className="card" style={{ width: '18rem' }}>
			  <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..." />
			  <div className="card-body">
				<h5 className="card-title">{props.item.name}</h5>
				{props.category === 'people' ? (
				<div>
				<p>Gender: {props.item.gender}</p>
				<p>Hair Color: {props.item.hair_color}</p>
				<p>Eye Color: {props.item.eye_color}</p>
				</div>
				) : props.category === 'planets' ? (
					<div>
					<p>Population: {props.item.population}</p>
					<p>Terrain: {props.item.terrain}</p>
					</div>
				): (props.category === 'vehicles' || props.category === 'starships') ? (
					<div>
					<p>Model: {props.item.model}</p>
					<p>Manufacturer: {props.item.manufacturer}</p>
					<p>Cost(credits): {props.item.cost_in_credits}</p>
					</div>
				): props.category === 'species' ? (
					<div>
					<p>Classification: {props.item.classification}</p>
					<p>Eye Color: {props.item.skin_colors}</p>
					<p>Hair Color: {props.item.hair_colors}</p>
					</div>
				): null}
				<Link to={'/'+ props.category+'/details/' + props.idx}>
				<a href="#" className="btn btn-primary">
				  Go somewhere
				</a>
				</Link>
				<button className="btn border-warning mx-2">
				<i class="fa-regular fa-star"></i>
				</button>
			  </div>
			</div>
		  </div>
	);
  };