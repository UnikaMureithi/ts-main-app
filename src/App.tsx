import React from 'react';
import { useState } from "react";
// import '/App.css';
import Parent from './components/Parent';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { MessageContext } from "./context/MessageContext";

function App () {
  const [name, setName] = useState<Name>("Mureithi");

  return (
    <div className='center'>
      <MessageContext.Provider value={{ name }}>
      <Parent />
    </MessageContext.Provider>
    <br></br>
      <Login/> <br></br>
      <SignUp/>
    </div>
  );
}

export default App;