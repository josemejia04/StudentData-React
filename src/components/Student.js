import React from "react";
import Score from "./Score";

const Student = ({ student }) => {
  return (
    <div>
      <h3>{student.name}</h3>
      <p>{student.bio}</p>
      <h4>Scores: </h4>
      {student.scores.map((score, index) => (
        <Score score={score} key={index} />
      ))}
    </div>
  );
};

export default Student;
