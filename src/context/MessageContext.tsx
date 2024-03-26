import { createContext, useState, useContext } from "react";

export const MessageContext = createContext<ContextType>({
  name: 'Mureithi',
});