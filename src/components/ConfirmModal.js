import React from 'react';

const ConfirmModal = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div style={modalStyle}>
      <div style={modalContentStyle}>
        <h3>{message}</h3>
        <div style={buttonContainerStyle}>
          <button onClick={onConfirm} style={buttonStyle}>
            Yes
          </button>
          <button onClick={onCancel} style={buttonStyle}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

// Simple styles for the modal
const modalStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  textAlign: 'center',
};

// Styles for the button container
const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px', // Optional: Add some space above the buttons
};

// Styles for the buttons
const buttonStyle = {
  margin: '0 10px', // Adds horizontal margin between buttons
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  backgroundColor: '#007bff', // Change to your desired color
  color: 'white',
};

export default ConfirmModal;
