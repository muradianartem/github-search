import React from "react";

import "./Button.scss";

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  label: string;
}

const Button: React.FC<ButtonInterface> = ({ label, ...otherProps}) => {
  return (
    <button className="base-form-button" {...otherProps}>
      {label}
    </button>
  )
}

export default Button;