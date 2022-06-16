import React, { useState, useEffect } from "react";
import "./Slider.css";
import { links } from "./../games/gamesData";

export const Slider = () => {
  const [game, setGame] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      {
        game < 6 ? setGame(game + 1) : setGame(0);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [game]);

  return (
    <div className="poster">
      <img src={links[game].src} className="posterImg" alt="" />
    </div>
  );
};
