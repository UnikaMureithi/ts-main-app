import React, { useState } from "react";

const Login = () => {
    const [firstname, setFirstName] = useState<FirstName>();
    const [lastname, setLastName] = useState<LastName>();
    const [password, setPassword] = useState<Password>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
        firstname: firstname,
        lastname: lastname,
        password: password,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input name="firstName" onChange={(e) => setFirstName(e.target.value)} />

        <label htmlFor="lastName">Last Name:</label>
        <input name="lastName" type="LastName" onChange={(e) => setLastName(e.target.value)}/>

        <label htmlFor="password">Password:</label>
        <input name="password" type="Password" onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;