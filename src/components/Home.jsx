import React from 'react';
import gitTogetherTeam from '../tempData';

const Card = ({ image, name, info }) => (
  <div className="homeCard">
    <img className="homeCardImage" src={image} alt={name} />
    <h2 className="homeCardName">{name}</h2>
    <p className="homeCardInfo">{info}</p>
  </div>
);

const Home = () => {
  return (
    <div className="homeContainer">
      {gitTogetherTeam.map((person, index) => (
        <Card key={index} {...person} />
      ))}
    </div>
  );
};

export default Home;
