import React from "react";
import { useHistory, Link } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };

  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div onClick={handleClick} className="home-button">
        Anasayfa
      </div>
    </div>
  );
}
