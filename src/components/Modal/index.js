// Layout from Oh Snap!/Photo-Port

import React from 'react';

const Modal = ({ onClose, currentTab }) => {
  const { name, description, image  } = currentTab;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img src={require(`${image}`)} alt="current name" />
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
