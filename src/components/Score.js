import React from "react";

const Score = ({ score }) => {
  return (
    <div>
      <span>Date: {score.date} = </span>
      <span>Score: {score.score}</span>
    </div>
  );
};

export default Score;
