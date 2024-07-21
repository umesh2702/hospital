import React, { useState } from 'react';
import './DoctorEditModal.css';

const DoctorEditModal = ({ show, doctor, onClose }) => {
  const [doctorDetails, setDoctorDetails] = useState(doctor);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorDetails({
      ...doctorDetails,
      [name]: value
    });
  };

  const handleSave = () => {
    // Handle save logic here
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-content">
          <h2 style={{marginTop:'0px'}}>Edit Doctor</h2>
          <div className="form-container">
            <div className="left-section">
              <div className="input-group" style={{display:'flex', justifyContent:'space-between'}}>
                <label>Doctor Photo</label>
                <button className="upload-button">Upload</button>
              </div>
              <div className="input-group" style={{display:'flex', justifyContent:'space-between'}}>
                <label>{doctor.name}</label>
                <input type="text" name="name" value={doctorDetails.name} onChange={handleChange} style={{width:'60%'}} />
              </div>
              <div className="input-group">
                <label>{doctor.specialty}</label>
                <input type="text" name="specialty" value={doctorDetails.specialty} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>{doctor.education}</label>
                <input type="text" name="qualification" value={doctorDetails.qualification} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>Description</label>
                <textarea name="description" value={doctorDetails.description} onChange={handleChange} style={{ height: '100px' }} />
              </div>
            </div>
            <div className="right-section">
              <h3 style={{marginTop:'0px'}}>Slot Deletion</h3>
              <div className="input-group">
                <label>Date</label>
                <input type="date" />
                <button className="delete-button">Delete</button>
              </div>
            </div>
          </div>
        </div>
        <button className="submit-button" onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default DoctorEditModal;
