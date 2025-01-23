import React, { createContext, useState } from "react";

// Create the context
export const SeedContext = createContext();

// Named export for SeedProvider
export const SeedProvider = ({ children }) => {
  const [Seed, setSeed] = useState("");

  console.log("SeedProvider: Current Seed:", Seed);

  return (
    <SeedContext.Provider value={{ Seed, setSeed }}>
      {children}
    </SeedContext.Provider>
  );
};
