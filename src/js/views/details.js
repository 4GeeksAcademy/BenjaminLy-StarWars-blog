import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  let item = store[params.category][params.idx];
  return (
    <div className="container">
      <div className="top row">
        <div className="top-left col-md-6">
          <img src="https://via.placeholder.com/600x500"/>
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
      <Link to="/">
        <span className="btn btn-primary btn-sm" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};
