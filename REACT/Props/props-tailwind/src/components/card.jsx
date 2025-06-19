import React from 'react';
import flagImage from '../assets/flag.jpg';

import pakistan from '../assets/flag.jpg';
import uae from '../assets/uae.jpg';
import turkey from '../assets/turkiye.jpg';

const flagMap = {
  Pakistan: pakistan,
  UAE: uae,
  Turkiye: turkey
};


function Card(props) {
  return (
    <div className="bg-white border border-gray-400 rounded-lg shadow-lg p-4 w-64 text-center hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-bold mb-2 text-gray-700">{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Religion: {props.religion}</p>
      <p>Country: {props.country}</p>
      <img src={flagMap[props.country]} alt="flag" className="mt-3 w-full h-32 object-cover rounded" />
    </div>
  );
}

export default Card;
