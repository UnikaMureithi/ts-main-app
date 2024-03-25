import React from "react";
import ChildC from './ChildC';

const ChildB = ({name}: MyPropTypes) => {
    return <ChildC name={name} />;
  };

  export default ChildB;