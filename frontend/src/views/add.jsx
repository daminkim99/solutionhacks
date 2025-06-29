import React from 'react';
import '../App.css';

export function Add() {
  return (
    <div>
      <h1 className="task-title">Task Creator</h1>

      <div className="rectangle form-container">
        <h2>Post a Task for Pickup!</h2>

        <form className="task-form">
          <label>
            Name:
            <input type="text" placeholder="Enter your name" />
          </label>

          <label>
            Address:
            <input type="text" placeholder="Enter your address" />
          </label>

          <label>
            Task Type:
            <input type="text" placeholder="e.g., Grocery pickup" />
          </label>

          <label>
            Date:
            <input type="date" />
          </label>

          <label>
            Description:
            <textarea placeholder="Enter task details..."></textarea>
          </label>


          {/* ✅ Checkboxes section */}
          <fieldset className="checkbox-group">
            <legend>Options:</legend>

            <label>
              <input type="checkbox" />
              Urgent Task
            </label>

            <label>
              <input type="checkbox" />
              Paid Task
            </label>

            <label>
              <input type="checkbox" />
              Requires Transportation
            </label>
          </fieldset>

          {/* ✅ Submit Button */}
          <button type="submit">Post Task</button>
        </form>
      </div>
    </div>
  );
};