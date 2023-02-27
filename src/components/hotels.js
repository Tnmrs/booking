import React from 'react';

const hotels = () => {
  fetch(`http://engine.hotellook.com/api/v2/lookup.json?query=moscow&lang=ru&lookFor=both&limit=1`);

  return <div></div>;
};

export default hotels;
