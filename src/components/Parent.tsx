import React from "react";
import ChildA from './ChildA';
import { useState } from "react";


const Parent = () => {
  const [name, setName] = useState<Name>("Unika");
  return <ChildA name={name} />;
};

export default Parent;