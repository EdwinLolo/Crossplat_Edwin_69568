// TransactionContext.js
import React, { createContext, useState, useContext } from "react";

const TransactionContext = createContext();

export const useTransaction = () => {
  return useContext(TransactionContext);
};

export const TransactionProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addTransaction = (transaction) => {
    setHistory((prevHistory) => [...prevHistory, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ history, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
