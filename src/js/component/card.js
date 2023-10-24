import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Card = (props) => {
    const { store, actions } = useContext(Context);
    let cardContent = null;
    if (props.category === 'characters') {
        cardContent = (
            <div>
                <p>Gender: {props.item.gender}</p>
                <p>Hair Color: {props.item.hair_color}</p>
                <p>Eye Color: {props.item.eye_color}</p>
            </div>
        );
    } else if (props.category === 'planets') {
        cardContent = (
            <div>
                <p>Population: {props.item.population}</p>
                <p>Terrain: {props.item.terrain}</p>
            </div>
        );
    } else if (props.category === 'species') {
        cardContent = (
            <div>
                <p>Classification: {props.item.classification}</p>
                <p>Eye Color: {props.item.skin_colors}</p>
                <p>Hair Color: {props.item.hair_colors}</p>
            </div>
        );
    } else {
		cardContent = (
			<div>
				<p>Model: {props.item.model}</p>
				<p>Manufacturer: {props.item.manufacturer}</p>
				<p>Cost(credits): {props.item.cost_in_credits}</p>
			</div>
	)}

    return (
        <div className='col-sm-3'>
            <div className="card" style={{ width: '18rem' }}>
                <img src={`https://starwars-visualguide.com/assets/img/${props.category}/${props.idx + 1}.jpg`} className="card-img-top"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
                }}/>
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}</h5>
                    {cardContent}
                    <Link to={'/' + props.category + '/details/' + props.idx}>
                        <a href="#" className="btn btn-primary">
                            Learn more!
                        </a>
                    </Link>
                    <button className="btn border-warning mx-2">
                        <i className={"fa-star " + (store.favorites.find((i , id) => i.item == props.item) ? "fa-solid" : "fa-regular" ) }
                        onClick={()=>actions.updateFavorites(props.item, props.category)}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
