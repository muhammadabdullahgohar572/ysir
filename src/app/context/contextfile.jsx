"use client";

import { createContext, useEffect, useState } from "react";

export const Data = createContext();

const ContextFiles = ({ children }) => {
  const [data, setdata] = useState(null);

  const apicall = async () => {
    try {
      const apiurl = await fetch("/api/user");
      const json = await apiurl.json();
      setdata(json.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apicall();
  }, []);

  return (
    <>
      <Data.Provider value={{ data, setdata }}>{children}</Data.Provider>
    </>
  );
};

export default ContextFiles;
