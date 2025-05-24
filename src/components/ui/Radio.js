import React from "react";

const Radio = ({ label, ...props }) => {
  return (
    <label className="inline-flex items-center space-x-2">
      <input type="radio" {...props} className="form-radio text-blue-500" />
      <span>{label}</span>
    </label>
  );
};

export default Radio;
