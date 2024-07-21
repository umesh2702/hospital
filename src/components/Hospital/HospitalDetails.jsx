import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import hospitalDetails from "../HospitalData";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DoctorCard from "../Doctor/DoctorCard";
import { FaPlus } from "react-icons/fa";
import './HospitalDetails.css';
import Add from "./Add";

const HospitalDetailsPage = ({ login, toggleLogin, mobile, setMobile }) => {
  const { id: hospitalId } = useParams();
  const [hospital, setHospital] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchHospitalDetails = () => {
      const fetchedHospital = hospitalDetails[hospitalId];
      setHospital(fetchedHospital);
      if (fetchedHospital?.cards?.length > 0) {
        setSelectedCard(fetchedHospital.cards[0]);
      }
    };

    fetchHospitalDetails();
  }, [hospitalId]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <Navbar login={login} toggleLogin={toggleLogin} mobile={mobile} setMobile={setMobile} />
      <div className="main-content">
        {hospital && (
          <>
            <div className="carousel-container">
              <div className="carousel-items">
                {hospital.cards.map((card) => (
                  <div
                    key={card.id}
                    className={`carousel-item ${selectedCard === card ? 'selected-card' : ''}`}
                    onClick={() => handleCardClick(card)}
                    onMouseEnter={(e) => {
                      if (selectedCard !== card) {
                        e.currentTarget.style.border = "1px solid #2BB673";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCard !== card) {
                        e.currentTarget.style.border = "";
                      }
                    }}
                  >
                    <img src={card.image} alt={card.name} />
                    <h3>{card.name}</h3>
                  </div>
                ))}
              </div>
            </div>
            {selectedCard && (
              <div className="doctor-list">
                {selectedCard.doctors.map((doctor) => (
                  <DoctorCard
                    key={doctor.id}
                    doctor={doctor}
                    cardNumber={selectedCard.id}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className="add-button-container">
        <div
          className="add-button"
          onClick={() => setShowModal(!showModal)}
        >
          <FaPlus className="plus-icon" />
        </div>
        {showModal && (
          <Add showModal={showModal} setShowModal={setShowModal} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HospitalDetailsPage;
