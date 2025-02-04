import React from "react";
import "./Card.css";

export const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">무게 : {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">키 : {pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">특성 : {pokemon.abilities[0].ability.name}</p>
        </div>
      </div>
    </div>
  );
};
