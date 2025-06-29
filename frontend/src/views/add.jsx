import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';

export function Add() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    taskType: '',
    date: '',
    description: '',
    urgent: false,
    paid: false,
    transportation: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type == 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting task:', formData);

    try {
      const response = await axios.post('http://localhost:5000/tasks', formData);
      alert('Task submitted successfully!');
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      alert('Failed to submit task');
    }
 };

  return (
    <div>
      <h1 className="task-title">Task Creator</h1>

      <div className="rectangle form-container">
        <h2>Post a Task for Pickup!</h2>

        <form className="task-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange}/>
          </label>

          <label>
            Address:
            <input type="text" name="address" placeholder="Enter your address" value={formData.address} onChange={handleChange}/>
          </label>

          <label>
            Task Type:
            <input type="text" name="taskType" placeholder="e.g., Grocery pickup" value={formData.taskType} onChange={handleChange}/>
          </label>

          <label>
            Date:
            <input type="date" name="date" value={formData.date} onChange={handleChange}/>
          </label>

          <label>
            Description:
            <textarea placeholder="Enter task details..." name="description" value={formData.description} onChange={handleChange}></textarea>
          </label>


        {/*Checkboxes section */}
        <fieldset className="checkbox-group">
            <legend>Options:</legend>

            <label>
                <input type="checkbox" name="urgent" checked={formData.urgent} onChange={handleChange} />
                Urgent Task 
            </label>

            <label>
                <input type="checkbox" name="paid" checked={formData.paid} onChange={handleChange} />
                Paid Task
            </label>

            <label>
                <input type="checkbox" name="transportation" checked={formData.transportation} onChange={handleChange} />
                Requires Transportation
            </label>
        </fieldset>

        {/*Submit Button */}
            <button type="submit">Post Task</button>
        </form>
      </div>
    </div>
  );
};