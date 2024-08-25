import React, { useState } from "react";
import menstrualData from "../period-phases/phase.js"; // Adjust the path as necessary

const MenstrualPhaseForm = () => {
  // State to keep track of the selected phase
  const [selectedPhase, setSelectedPhase] = useState("");

  // Function to handle the change in dropdown selection
  const handlePhaseChange = (event) => {
    setSelectedPhase(event.target.value);
  };

  // Get the data for the selected phase
  const phaseData = selectedPhase ? menstrualData.menstrualPhases[selectedPhase] : null;

  return (
    <div className="p-6 font-sans bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Menstrual Phases Information</h2>

      {/* Dropdown to select the menstrual phase */}
      <form className="mb-6">
        <label htmlFor="phase-select" className="block text-gray-700 mb-2 text-xl font-bold">Select Menstrual Phase:</label>
        <select
          id="phase-select"
          value={selectedPhase}
          onChange={handlePhaseChange}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            -- Choose a Phase --
          </option>
          {Object.keys(menstrualData.menstrualPhases).map((phaseKey) => (
            <option key={phaseKey} value={phaseKey}>
              {menstrualData.menstrualPhases[phaseKey].name}
            </option>
          ))}
        </select>
      </form>

      {/* Display symptoms and diet based on the selected phase */}
      {phaseData && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Symptoms of {phaseData.name}</h3>
          <ul className="list-disc list-inside mb-4">
            {phaseData.symptoms.map((symptom, index) => (
              <li key={index} className="text-gray-700">
                {symptom}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">Diet Recommendations for {phaseData.name}</h3>
          <ul className="list-disc list-inside">
            {phaseData.diet.map((dietItem, index) => (
              <li key={index} className="text-gray-700">
                {dietItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenstrualPhaseForm;
