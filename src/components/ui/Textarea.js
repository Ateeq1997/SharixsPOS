import React from "react";

const Textarea = ({ ...props }) => {
  return <textarea {...props} className="border p-2 rounded w-full resize-none" />;
};

export default Textarea;
