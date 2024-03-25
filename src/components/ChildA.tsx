import React from "react";
import ChildB from './ChildB';

const ChildA = ({name}: MyPropTypes) => {
    return <ChildB name={name} />;
  };

  export default ChildA;