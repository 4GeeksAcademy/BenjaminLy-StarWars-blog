import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Details = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let item = store[params.category][params.idx];
  let detailsContent = null
  let idx = parseInt(params.idx, 10)
  if (params.category === 'characters'){
    detailsContent = (
      <div className="bottom row">
      <div className="col">
        Name:
      <p>{item.name}</p>
      </div>
      <div className="col">
        Birth Year:
        <p>{item.birth_year}</p>
        </div>
      <div className="col">
        Gender:
        <p>{item.gender}</p>
      </div>
      <div className="col">
        Height:
        <p>{item.height}</p>
      </div>
      <div className="col">
        Hair Color:
        <p>{item.hair_color}</p>
      </div>
      <div className="col">
        Skin Color:
        <p>{item.skin_color}</p>
      </div>
    </div>
    )
  } else if (params.category === 'species'){
    detailsContent = (
      <div className="bottom row">
      <div className="col">
        Name:
      <p>{item.name}</p>
      </div>
      <div className="col">
        Average Life Span:
        <p>{item.average_lifespan}</p>
        </div>
      <div className="col">
        Designation:
        <p>{item.designation}</p>
      </div>
      <div className="col">
        Average Height:
        <p>{item.average_height}</p>
      </div>
      <div className="col">
        Hair Colors:
        <p>{item.hair_colors}</p>
      </div>
      <div className="col">
        Skin Colors:
        <p>{item.skin_colors}</p>
      </div>
    </div>
    )
  } else if (params.category === 'planets'){
      detailsContent = (
        <div className="bottom row">
        <div className="col">
          Name:
        <p>{item.name}</p>
        </div>
        <div className="col">
          Rotational Period:
          <p>{item.rotation_period}</p>
          </div>
        <div className="col">
          Climate:
          <p>{item.climate}</p>
        </div>
        <div className="col">
          Orbital Period:
          <p>{item.orbital_period}</p>
        </div>
        <div className="col">
          Diameter:
          <p>{item.diameter}</p>
        </div>
        <div className="col">
          Terrain:
          <p>{item.terrain}</p>
        </div>
      </div>
    )
  } else {
    detailsContent = (
      <div className="bottom row">
      <div className="col">
        Name:
      <p>{item.name}</p>
      </div>
      <div className="col">
        Model:
        <p>{item.model}</p>
        </div>
      <div className="col">
        Manufacturer:
        <p>{item.manufacturer}</p>
      </div>
      <div className="col">
        Cost (credits):
        <p>{item.cost_in_credits}</p>
      </div>
      <div className="col">
        Length:
        <p>{item.length}</p>
      </div>
      <div className="col">
        Passengers:
        <p>{item.passengers}</p>
      </div>
    </div>
  )
  }
  return (
    <div className="container">
      <div className="top row">
        <div className="top-left col-md-6">
          <img src={`https://starwars-visualguide.com/assets/img/${params.category}/${idx + 1}.jpg`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';
        }}/>
        </div>
        <div className="top-right col-md-6">
          <h1>{item.name}</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      {detailsContent}
      <Link to="/">
        <span className="btn btn-primary btn-sm" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
