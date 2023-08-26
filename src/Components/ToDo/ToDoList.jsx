import Stack from "@mui/material/Stack";
import "./ToDo.css";
import Task from "../Task/Task";
import { Button, Card, Modal, TextField } from "@mui/material";
import { useState } from "react";
import moment from "moment/moment";

const ToDoList = ({
  data,
  triggerModal,
  handleClose,
  handleSubmit,
  deleteTask,
  editTask,
}) => {
  const [formData, setFormData] = useState({
    id: -1,
    title: "",
    date: "",
    description: "",
  });
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleFormSubmit = () => {
    let identity = 0;
    if (data.length > 0) {
      identity = data[data.length - 1].id + 1;
    } else {
      identity = 1;
    }
    const payload = {
      ...formData,
      id: identity,
    };
    payload.date = moment(payload.date).format("MM-DD-YYYY");
    handleSubmit(payload);
  };

  return (
    <div className="container">
      <div className="title">
        <h2 className="titleText">To - Do List</h2>
      </div>
      <Stack direction={"column"} spacing={1}>
        {data.map((ele, index) => {
          return (
            <Task
              key={`ele-${index}`}
              active={true}
              data={ele}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })}
      </Stack>
      <Modal open={triggerModal} onClose={handleClose}>
        <div className="modal-wrapper">
          <div className="centered-content">
            <Card className="modal-card">
              <h4 className="modal-title">Add A New Task</h4>
              <form className="modal-form" onSubmit={handleFormSubmit}>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth={true}
                  value={formData.title}
                  style={{ marginBottom: "12px" }}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
                <TextField
                  label="Date"
                  variant="outlined"
                  fullWidth={true}
                  value={formData.date}
                  style={{ marginBottom: "12px" }}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth={true}
                  value={formData.description}
                  style={{ marginBottom: "12px" }}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
                />
              </form>
              <div className="modal-buttons">
                <Button
                  variant="contained"
                  color="warning"
                  className="btn"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className="btn"
                  onClick={handleFormSubmit}
                >
                  Submit
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ToDoList;
