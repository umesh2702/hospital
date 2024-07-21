import React, { useState } from 'react';
import './Add.css';

function Add({showModal, setShowModal}) {
  const [startDate, setStartDate] = useState('');
  const [numberOfDays, setNumberOfDays] = useState(3);
  const [appointmentDuration, setAppointmentDuration] = useState(15);
  const [timeSlots, setTimeSlots] = useState([{ start: '12 PM', end: '2 PM' }]);

  const handleAddSlot = () => {
    setTimeSlots([...timeSlots, { start: '', end: '' }]);
  };
const handleModal=()=>{
    setShowModal(!showModal)
}

  return (
    <>
    <div className="backdrop"></div>
    <div className="modal">
      <div className="modal-content">
        <h2 style={{marginTop:'0px'}}>Add Doctor</h2>
        <div className="form-container">
          <div className="left-section">
            <div className="input-group" style={{display:'flex', justifyContent:'space-between'}}>
              <label>Doctor Photo</label>
              <button className="upload-button">Upload</button>
            </div>
            <div className="input-group" style={{display:'flex', justifyContent:'space-between'}}>
              <label>Name</label>
              <input type="text" style={{width:'60%'}}/>
            </div>
            <div className="input-group">
              <label>Specialty</label>
              <select>
                <option value="">Select Specialty</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="input-group">
              <label>Qualification</label>
              <select>
                <option value="">Select Qualification</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="input-group">
              <label>Description</label>
              <textarea style={{ height: '100px' }} />
            </div>
          </div>
          <div className="right-section">
            <h3 style={{marginTop:'0px'}}>Slot Information</h3>
            <div className="input-group">
              <label>Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label style={{margin:'0px'}}>Number of days</label>
              <input
                type="number"
                min="1"
                max="7"
                value={numberOfDays}
                onChange={(e) => setNumberOfDays(e.target.value)}
                style={{padding:'2px'}}
              />
            </div>
            <div className="input-group">
              <label style={{margin:'0px'}}>Appointment Duration (minutes)</label>
              <input
                type="number"
                min="15"
                max="60"
                step="5"
                value={appointmentDuration}
                onChange={(e) => setAppointmentDuration(e.target.value)}
              />
            </div>
            <div className="time-slots">
              {timeSlots.map((slot, index) => (
                <div key={index} className="time-slot">
                  <input
                    type="text"
                    value={slot.start}
                    placeholder="Start Time"
                    onChange={(e) => {
                      const newTimeSlots = [...timeSlots];
                      newTimeSlots[index].start = e.target.value;
                      setTimeSlots(newTimeSlots);
                    }}
                  />
                  <span>-</span>
                  <input
                    type="text"
                    value={slot.end}
                    placeholder="End Time"
                    onChange={(e) => {
                      const newTimeSlots = [...timeSlots];
                      newTimeSlots[index].end = e.target.value;
                      setTimeSlots(newTimeSlots);
                    }}
                  />
                  <button
                    className="remove-slot-button"
                    onClick={() => {
                      const newTimeSlots = timeSlots.filter((_, i) => i !== index);
                      setTimeSlots(newTimeSlots);
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button className="add-slot-button" onClick={handleAddSlot}>Add slot</button>
            </div>
          </div>
        </div>
      </div>
      <button className="submit-button" onClick={handleModal}>Add Doctor</button>
    </div>
    </>
  );
}

export default Add;
