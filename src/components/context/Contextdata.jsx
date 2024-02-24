import React, { createContext, useEffect, useState } from "react";

export const data = createContext();

function Contextdata({ children }) {
  const [planetsdata, setplanetsdata] = useState([]);
  const [count, setcount] = useState();
  const [url, seturl] = useState(
    "https://swapi.dev/api/planets/?page=1&format=json"
  );

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setcount(data.count);
        setplanetsdata(data.results);
      });
  }, [url]);

  return (
    <data.Provider value={{ planetsdata, count, url, seturl }}>
      {children}
    </data.Provider>
  );
}

export default Contextdata;
