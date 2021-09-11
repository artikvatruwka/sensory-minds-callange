import React from "react";
import "./styles.css";
import logo from "../../assets/images/Skyrim-Logo.png";
const BingoCell = ({ phrase, checked, onClick, isWin }) => {
  const isEmpty = !phrase;
  return (
    <div
      className={`bingo-cell__wrapper ${
        isWin ? "bingo-cell__wrapper--win-outline" : ""
      }`}
    >
      <button
        className={`bingo-cell ${checked ? "bingo-cell--checked" : ""} ${
          isEmpty ? "bingo-cell--center" : ""
        }`}
        onClick={!isEmpty ? onClick : () => {}}
      >
        {!isEmpty ? (
          phrase
        ) : (
          <img className="bingo-cell__image" src={logo} alt="skyrim logo" />
        )}
      </button>
    </div>
  );
};

export default BingoCell;
