import { Button, Card } from "@mui/material";
import React, { useState } from "react";
import "./Task.css";

const Task = ({ data, deleteTask, editTask }) => {
  const [raised, setRaised] = useState(false);
  const handleMouseEnter = () => {
    setRaised(true);
  };
  const handleMouseLeave = () => {
    setRaised(false);
  };
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card raised={raised} className="taskCard">
        <div className="cardContainer">
          <div className="wrapper">
            <div className="taskTitle">
              <h3>{data.title}</h3>
            </div>
            <div className="dateTime">
              <h3>{data.date}</h3>
            </div>
            <div className="description">
              <h3>{data.description}</h3>
            </div>
          </div>
          <div className="buttons">
            <Button
              variant="contained"
              color="inherit"
              className="btn"
              onClick={() => editTask(data.id)}
            >
              Edit
            </Button>
            <span className="buttonGap"></span>
            <Button
              variant="contained"
              color="error"
              className="btn"
              onClick={() => deleteTask(data.id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Task;
