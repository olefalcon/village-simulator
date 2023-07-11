import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";
import { initVillageState } from "./initVillageState";
import { ResourcesInterface } from "./resources";
import { IndustryInterface } from "./industryInterface";

export interface VillageStateInterface {
  resources: Partial<ResourcesInterface>,
  industries: Partial<IndustryInterface>[],
  population: number
}

const VillageStateContext = createContext({
  villageState: initVillageState as Partial<VillageStateInterface>,
  setVillageState: {} as Dispatch<SetStateAction<Partial<VillageStateInterface>>>,
});

const VillageStateProvider = ({
  children,
  value = initVillageState as Partial<VillageStateInterface>,
}: {
  children: React.ReactNode;
  value?: Partial<VillageStateInterface>;
}) => {
  const [villageState, setVillageState] = useState(value);
  return (
    <VillageStateContext.Provider value={{ villageState, setVillageState }}>
      {children}
    </VillageStateContext.Provider>
  );
};

const useVillageState = () => {
  const context = useContext(VillageStateContext);
  if (!context) {
    throw new Error("useVillageState must be used within a VillageStateContext");
  }
  return context;
};

export { VillageStateProvider, useVillageState };

