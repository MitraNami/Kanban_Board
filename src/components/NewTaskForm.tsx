import React, { useState } from "react";
import { NewTaskData, Task } from "./types";

const NewTaskForm = (props: {onCreateTask: (newTask: NewTaskData) => void}) => {

  const [showNewCardForm, setShowNewCardForm] = useState<boolean>(false);
  const [formInput, setFormInput] = 
    useState<Pick<Task, "title" | "description">>({ title: '', description: ''});

  const toggleForm = React.useCallback(() => {
    setShowNewCardForm(!showNewCardForm);
  }, [setShowNewCardForm, showNewCardForm]);

  const onTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => 
    setFormInput(state => ({...state, title: evt.target.value}));
  
  const onDescriptionChange = (evt: React.ChangeEvent<HTMLInputElement>) => 
    setFormInput(state => ({...state, description: evt.target.value}));
  
  const resetForm = () => 
    setFormInput(state => ({...state, description: '', title: ''}));
  
  const onCreateTask = (evt: React.FormEvent) => {
    evt.preventDefault();
    props.onCreateTask({title: formInput.title, description: formInput.description});
    resetForm();
  };

  return (
    <div>
      <div className="task-list-title">
        <button
          className="button button-default"
          onClick={toggleForm}
        >
          + New task
        </button>
      </div>
      {showNewCardForm && (
        <form onSubmit={onCreateTask}>
          <input
            className="full-width-input"
            onChange={onTitleChange}
            value={formInput.title}
            type="text"
            placeholder="title"
          />
          <input
            className="full-width-input"
            onChange={onDescriptionChange}
            value={formInput.description}
            type="text"
            placeholder="description"
          />
          <button
            className="button"
            type="submit"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default NewTaskForm;