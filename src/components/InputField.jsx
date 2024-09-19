import React, { useState } from "react";

const InputField = ({ type, field, onChange }) => { 
const [value, setValue] = useState('')

const handleChange = (event) => {
  const {value} = event.target;
  setValue(value)
  onChange(value, field)
}


  return (
    <input
      type={type}
      name={field}
      value={value}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      className="block rounded-xl border border-gray-800 w-full bg-churead-gray-800 text-white placeholder-churead-gray-600 p-5"
      onChange={handleChange}
    />
  );
};

export default InputField;
