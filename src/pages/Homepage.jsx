import React, { useState } from 'react';
import './Homepage.css';

function Wellness() {
  const [day, setDay] = useState(6);
  const [waterConsumed, setWaterConsumed] = useState(2);
  const [symptoms, setSymptoms] = useState([]);

  const handleAddSymptom = (symptom) => {
    setSymptoms([...symptoms, symptom]);
  };

  const handleRemoveSymptom = (index) => {
    setSymptoms(symptoms.filter((_, i) => i !== index));
  };

  const handleWaterChange = (event) => {
    setWaterConsumed(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  return (
    <div className="container">
      <div className="header">
        <span className="menu-icon">☰</span>
      </div>
      <div className="content">
        <div className="calendar">
          <div className="calendar-header">
            <span>1 FEB</span>
            <span>2 FEB</span>
            <span>3 FEB</span>
            <span>4 FEB</span>
            <span>5 FEB</span>
            <span>6 FEB</span>
            <span>7 FEB</span>
          </div>
          <div className="calendar-body">
            <div className="day-card">
              <div className="day-number">Day {day}</div>
              <div className="day-title">PERIODS</div>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="info">
            <p>
              Your symptoms says your periods going to end soon
            </p>
            <p>Water consumed: - {waterConsumed}L</p>
          </div>
          <button className="log-button">Log Periods</button>
          <div className="symptoms">
            <h3>Log Symptoms</h3>
            <div className="symptoms-list">
              {symptoms.map((symptom, index) => (
                <div className="symptom" key={index}>
                  <span>{symptom}</span>
                  <span className="remove-icon" onClick={() => handleRemoveSymptom(index)}>
                    🗑️
                  </span>
                </div>
              ))}
            </div>
            <div className="add-symptom">
              <span>+</span>
              <input
                type="text"
                placeholder="Add symptom"
                onChange={(event) => handleAddSymptom(event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-icon">🏠</div>
        <div className="footer-icon">⚓️</div>
        <div className="footer-icon">📖</div>
        <div className="footer-icon">👥</div>
        <div className="footer-icon">📍</div>
        <div className="footer-icon">🧠</div>
        <div className="footer-icon">🚨</div>
      </div>
    </div>
  );
}

export default Wellness;
