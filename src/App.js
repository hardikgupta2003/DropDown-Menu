import './App.css';
import React from 'react';
import { useState } from 'react';

const data = [
  {
    id: 1,
    state: "Mh",
    cities: [
      { id: 1, name: "Mumbai" },
      { id: 2, name: "Pune" },
    ],
  },
  {
    id: 2,
    state: "Mp",
    cities: [
      { id: 1, name: "Indore" },
      { id: 2, name: "Ujjain" },
    ],
  },
  {
    id: 3,
    state: "Gj",
    cities: [
      { id: 1, name: "Ahmedabad" },
      { id: 2, name: "Surat" },
    ],
  },
];
function App() {
  // const [selectedState, setSelectedState] = useState('');
  // const [cities, setCities] = useState([]);
  // const [showCities, setShowCities] = useState(false);

  // const handleStateChange = (event) => {
  //   const state = event.target.value;
  //   setSelectedState(state);
  //   const selectedData = data.find(item => item.state === state);
  //   if (selectedData) {
  //     setCities(selectedData.cities);
  //     setShowCities(false); // Reset showCities
  //   }
  // };

  // const handleMouseEnter = (state) => {
  //   const selectedData = data.find(item => item.state === state);
  //   if (selectedData) {
  //     setCities(selectedData.cities);
  //     setShowCities(true);
  //   }
  // };

  // const handleMouseLeave = () => {
  //   setShowCities(false);
  // };

  // return (
  //   <div>
  //     <label htmlFor="state">Select a state:</label>
  //     <select id="state" value={selectedState} onChange={handleStateChange}>
  //       <option value="">Select a state</option>
  //       {data.map((item) => (
  //         <option key={item.id} value={item.state}>{item.state}</option>
  //       ))}
  //     </select>

  //     {showCities && (
  //       <div onMouseLeave={handleMouseLeave}>
  //         {cities.map((city) => (
  //           <div key={city.id}>{city.name}</div>
            
  //         ))}
  //       </div>
  //     )}
  //   </div>
  // );

  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    setSelectedCity('');
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <label >Select a state:</label>
      <select id="state" value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {data.map((state) => (
          <option key={state.id} value={state.state}>{state.state}</option>
        ))}
      </select>

      {selectedState && (
        <div>
          <label >Select a city:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>

            {data.find((state) => state.state === selectedState).cities.map((city) => (
              <option key={city.id} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );



  


}

export default App;
