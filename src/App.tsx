import React from 'react';
// import '/App.css';
import Counter from './components/Counter';
import Context from './components/Context';
import Form from './components/Form';
import ChildC from './components/ChildC';

function App () {
  return (
    <div className='center'>
      <Counter initialCount={250} />
      <ChildC name="John"/>
      <Context/>
      <Form/>
    </div>
  );
}

export default App;