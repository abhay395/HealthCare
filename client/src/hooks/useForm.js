// src/hooks/useForm.js
import { useState } from 'react';

const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (addFunction) => {
    const isEmpty = Object.values(formData).some((x) => x === '');
    if (isEmpty) {
      alert('Please fill in all fields.');
      return;
    }
    addFunction(formData);
    resetForm(); // Reset form after submission
  };

  const resetForm = () => setFormData(initialState);

  return { formData, handleChange, resetForm, setFormData,handleSubmit };
};

export default useForm;