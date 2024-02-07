import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    Fullname: "",
    Email: "",
    Phonenumber: "",
    CompanyName: "",
    serviceOption: "",
    budget: "",
  });

  const updateFormState = (newData) => {
    setFormState((prevFormData) => ({
      ...prevFormData,
      ...newData,
    }));
  };

  const resetFormState = () => {
    setFormState({
      Fullname: "",
      Email: "",
      Phonenumber: "",
      CompanyName: "",
      serviceOption: "",
      budget: "",
    });
  };

  return (
    <FormContext.Provider
      value={{ formState, updateFormState, resetFormState }}
    >
      {children}
    </FormContext.Provider>
  );
};
