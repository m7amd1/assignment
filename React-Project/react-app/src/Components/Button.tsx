import React, { useState } from "react";

interface ButtonWithAlertProps {
  message: string;
}

const Button = ({ message }: ButtonWithAlertProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleToggle = () => {
    setShowAlert(!showAlert);
  };

  return (
    <>
      {showAlert && (
        <div
          className="alert alert-info alert-dismissible fade show"
          role="alert"
        >
          {message}
          <button
            type="button"
            className="btn-close"
            onClick={handleToggle}
          ></button>
        </div>
      )}

      <button className="btn btn-primary" onClick={handleToggle}>
        {showAlert ? "Close Alert" : "Show Alert"}
      </button>
    </>
  );
};

export default Button;
