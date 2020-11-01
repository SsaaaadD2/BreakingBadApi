import React from "react";
import {Link} from "react-router-dom";

const CharacterItem = ({item}) => {
  const uriName = item.name.replace(" ", "+");
  return (
    <Link to={{pathname: `/character/${uriName}`, item}}>
      <span className="card" style={{display: "block"}}>
        <div className="card-inner">
          <div className="card-front">
            <img src={item.img} alt="" />
          </div>
          <div className="card-back">
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name: </strong> {item.portrayed}
              </li>
              <li>
                <strong>Nickname: </strong> {item.nickname}
              </li>
              <li>
                <strong>Date of Birth: </strong> {item.birthday}
              </li>
              <li>
                <strong>Status: </strong> {item.status}
              </li>
            </ul>
          </div>
        </div>
      </span>
    </Link>
  );
};

export default CharacterItem;
