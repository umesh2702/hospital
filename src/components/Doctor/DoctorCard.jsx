import React, { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import "./DoctorCard.css";
import DoctorEditModal from "./DoctorEditModal";

const DoctorCard = ({ doctor, cardNumber }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i < rating ? "dc-star-filled" : "dc-star-empty"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="dc-doctor-card" onClick={toggleModal}>
      <div className="dc-doctor-card-content">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="dc-doctor-image"
        />
        <div className="dc-doctor-info">
          <div className="dc-doctor-header">
            <h1 className="dc-doctor-name">
              {doctor.name}
              <span className="dc-doctor-education">
                {doctor.education}
              </span>
            </h1>
          </div>
          <div className="dc-doctor-rating">
            {renderStars(doctor.rating)}
          </div>
        </div>
        <FaHeart
          className="dc-doctor-heart"
          style={{ color: doctor.heartcolor }}
        />
      </div>
      {isModalOpen && (
        <DoctorEditModal
          show={isModalOpen}
          doctor={doctor}
          onClose={toggleModal}
        />
      )}
    </div>
  );
};

export default DoctorCard;
