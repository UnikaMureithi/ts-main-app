import React from "react";

function Form () {
    return (
        <form id="myForm">
  <div>
    <label htmlFor="firstName">First Name:</label>
    <input
      type="text"
      id="firstName"
      name="firstName"
      required
    />
  </div>
  <div>
    <label htmlFor="lastName">Last Name:</label>
    <input
      type="text"
      id="lastName"
      name="lastName"
      required
    />
  </div>
  <button type="submit">Submit</button>
</form>
    );
  }
  
  export default Form;