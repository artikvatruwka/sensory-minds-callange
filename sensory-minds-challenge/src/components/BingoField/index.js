import React, { useState } from "react";
import { generateBingoField } from "../../gameHelpers";
import BingoCell from "../BingoCell";
import "./styles.css";
import winSound from "../../assets/sounds/levelup.mp3";
import _ from "lodash";

const BingoField = () => {
  const [field, setField] = useState(generateBingoField());
  const [userWon, setUserWon] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const setCell = (value, row, column) => {
    const fieldsCopy = _.cloneDeep(field);
    fieldsCopy[row][column].checked = value;
    setField(fieldsCopy);
  };

  const playWinAudio = () => {
    let audio = new Audio(winSound);
    audio.play();
  };

  const getWinningRows = () => {
    return _.keys(
      _.pickBy(field, (row) => row.every((cell) => cell.checked))
    ).map((item) => Number(item));
  };

  const getWinningColumns = () => {
    const winningColumns = [];
    for (let col = 0; col < field.length; col++) {
      let isWinning = true;
      for (let row = 0; row < field.length; row++) {
        if (!field[row][col].checked) {
          isWinning = false;
        }
      }
      if (isWinning) {
        winningColumns.push(col);
      }
    }
    return winningColumns;
  };

  const getWinningDiagonals = () => {
    let isTopToBottomWinning = true;
    for (let i = 0; i < field?.length; i++) {
      if (!field[i][i].checked) {
        isTopToBottomWinning = false;
      }
    }
    let isBottomToTopWinning = true;
    for (let i = 0; i < field?.length; i++) {
      if (!field[field?.length - 1 - i][i].checked) {
        isBottomToTopWinning = false;
      }
    }
    return { isTopToBottomWinning, isBottomToTopWinning };
  };

  if (userWon && !soundPlayed) {
    playWinAudio();
    setSoundPlayed(true);
  }

  return (
    <div className="bingo-field">
      <div className="bingo-field__content">
        {field.map((row, rowKey) =>
          row.map((cell, cellKey) => {
            const winningRows = getWinningRows();
            const winningColumns = getWinningColumns();
            const winningDiagonals = getWinningDiagonals();
            let isWin = false;
            if (winningRows.includes(rowKey)) {
              isWin = true;
            }
            if (winningColumns.includes(cellKey)) {
              isWin = true;
            }
            if (cellKey === rowKey && winningDiagonals.isTopToBottomWinning) {
              isWin = true;
            }
            if (
              cellKey - 1 - field.length === rowKey &&
              winningDiagonals.isBottomToTopWinning
            ) {
              isWin = true;
            }
            if (!userWon && isWin) {
              setUserWon(true);
            }
            return (
              <BingoCell
                {...cell}
                key={`${rowKey}-${cellKey}`}
                onClick={() => {
                  setCell(!cell?.checked, rowKey, cellKey);
                }}
                isWin={isWin}
              />
            );
          })
        )}
      </div>
      <div className="bingo-field__overlay"></div>
    </div>
  );
};
export default BingoField;
