import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader'; 
const Cargando = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#3498db" loading={true} size={50} />
    </div>
  );
};

export default Cargando;
