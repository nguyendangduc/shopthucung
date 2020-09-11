import React from 'react';
import SimpleForm from "./SimpleForm";

const User = props => {
  const showResults = values => {
    console.log("values in form user", values);
  }
  
  return<>
    <h3>Hello User .!</h3>
    <SimpleForm onSubmit={showResults} />
  </>
}

export default User;