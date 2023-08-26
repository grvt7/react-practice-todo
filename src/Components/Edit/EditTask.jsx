import { Button, Card, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const EditTask = ({ data, handleClose, triggerModal, handleSubmit }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    date: "",
    description: "",
  });

  useEffect(() => {
    setFormData({
      id: data?.id,
      title: data?.title,
      date: data?.date,
      description: data?.description,
    });
  }, [data]);

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleFormSubmit = () => {
    handleSubmit(formData);
  };
  return (
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
  );
};

export default EditTask;
