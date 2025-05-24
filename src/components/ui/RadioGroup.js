import React from "react";
import Radio from "./Radio";

const RadioGroup = ({ name, options = [], ...props }) => {
  return (
    <div className="flex space-x-4">
      {options.map((option, index) => (
        <Radio key={index} name={name} label={option.label} value={option.value} {...props} />
      ))}
    </div>
  );
};

export default RadioGroup;
