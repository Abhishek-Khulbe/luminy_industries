import React from "react";
import { links } from "./gamesData";
import "./Games.css";

export const Games = () => {
  return (
    <ul className="games">
      {links.map((link) => {
        return (
          <li key={link.id} className="singleGame">
            <img src={link.src} alt="" />
          </li>
        );
      })}
    </ul>
  );
};
