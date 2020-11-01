import React from "react";
import {Link} from "react-router-dom";

const CharacterPage = ({location}) => {
  const charData = location.item;
  return (
    <span className="char-center">
      <img src={charData.img} alt="character pic" style={{height: "300px"}} />
      <h1>{charData.name}</h1>
      <ul>
        <li>
          <strong>Nickname: </strong> {charData.nickname}
        </li>
        <li>
          <strong>Date of Birth: </strong> {charData.birthday}
        </li>
        <li>
          <strong>Occupation: </strong> {charData.occupation.join(",")}
        </li>
        <li>
          <strong>Status: </strong> {charData.status}
        </li>
        <li>
          <strong>Played By: </strong> {charData.portrayed}
        </li>
        {charData.appearance && (
          <li>
            <strong>Appearance: </strong> Seasons{" "}
            {charData.appearance.join(",")}
          </li>
        )}
        {charData.better_call_saul_appearance.length !== 0 && (
          <li>
            <strong>Better Call Saul Appearance: </strong> Seasons{" "}
            {charData.better_call_saul_appearance.join(",")}
          </li>
        )}
      </ul>
      <Link to="/home">
        <button className="btn">Back to Home</button>
      </Link>
    </span>
  );
};

export default CharacterPage;
