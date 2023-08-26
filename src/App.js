import { Button } from "@mui/material";
import "./App.css";
import ToDoList from "./Components/ToDo/ToDoList";
import { useState } from "react";
import EditTask from "./Components/Edit/EditTask";

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Garvit",
      date: "26-08-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos quibusdam dolore",
    },
    {
      id: 2,
      title: "Arush",
      date: "26.08.2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eos quibusdam dolore",
    },
  ]);

  const [triggerModal, setTriggerModal] = useState(false);
  const [triggerEditModal, setTriggerEditModal] = useState(false);
  const [editId, setEditId] = useState(-1);

  const handleClose = () => {
    setTriggerModal(false);
  };

  const handleEditClose = () => {
    setTriggerEditModal(false);
    setEditId(-1);
  };

  const handleSubmit = (values) => {
    setData((prevData) => [...prevData, values]);
    setTriggerModal(false);
  };

  const handleEditSubmit = (values) => {
    setTriggerEditModal(false);
    setEditId(-1);
    setData(
      data.map((ele) => {
        if (ele.id === values.id) return values;
        else return ele;
      })
    );
  };

  const editTask = (id) => {
    setTriggerEditModal(true);
    setEditId(id);
  };

  const deleteTask = (id) => {
    const change = data.filter((ele) => {
      return ele.id !== id;
    });
    setData(change);
  };

  const getEditData = () => {
    return data.find((ele) => ele.id === editId);
  };

  return (
    <div className="App">
      <div className="addTask">
        <Button
          variant="contained"
          color="primary"
          className="btn"
          onClick={() => setTriggerModal(true)}
        >
          Add Task
        </Button>
      </div>
      <ToDoList
        data={data}
        triggerModal={triggerModal}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        deleteTask={deleteTask}
        editTask={editTask}
      />
      <EditTask
        triggerModal={triggerEditModal}
        data={getEditData()}
        handleClose={handleEditClose}
        handleSubmit={handleEditSubmit}
      />
    </div>
  );
};

export default App;
