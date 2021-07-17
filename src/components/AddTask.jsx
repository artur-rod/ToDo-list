import React, { useState } from 'react';

import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData('');
  }

  const handleAddTaskEnter = (e) => {
    if (e.keyCode === 13) {
      handleTaskAddition(inputData);
      setInputData('');
    }
  }

  return (  
    <div className="add-task-container">
      <input 
        onChange={handleInputChange} 
        onKeyUp={handleAddTaskEnter}
        value={inputData}
        className="add-task-input" 
        type="text" 
      />
      <div className="add-task-button-container">
        <Button onCLick={handleAddTaskClick} >Adicionar</Button>
      </div>
    </div>
  );
}
 
export default AddTask;