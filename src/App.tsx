import React from 'react';
import { useState } from "react";
// import '/App.css';
// import Context from './components/Context';
import Form from './components/Form';
import Parent from './components/Parent';
import { MessageContext } from "./context/MessageContext";

function App () {
  const [name, setName] = useState<Name>("Mureithi");

  return (
    <div className='center'>
      <MessageContext.Provider value={{ name }}>
      <Parent />
    </MessageContext.Provider>

      <Form/>
    </div>
  );
}

export default App;