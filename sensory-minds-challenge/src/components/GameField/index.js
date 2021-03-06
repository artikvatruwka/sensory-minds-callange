import React from "react";
import BingoField from "../BingoField";
import FogBackground from "../FogBackground";
import "./styles.css";
const GameField = () => {
  return (
    <div className="game-field">
      <FogBackground />
      <div className="game-field__content">
        <BingoField />
      </div>
    </div>
  );
};
export default GameField;
