import React, { createContext, useContext, useState } from "react";
import { IFeed } from "../components/Feed";

interface Data {
  data: Array<IFeed>;
  updateData: (newData: Array<IFeed>) => void;
  forceUpdate: () => void;
}

const DataContext = createContext<Data | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Array<IFeed>>([]);
  const [forceUpdate, setForceUpdate] = useState<number>(0);

  const updateData = (newData: Array<IFeed>) => {
    setData(newData);
  };

  const triggerUpdate = () => {
    setForceUpdate((prev) => prev + 1);
  };

  return (
    <DataContext.Provider
      value={{ data, updateData, forceUpdate: triggerUpdate }}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          forceUpdate: triggerUpdate,
        });
      })}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used into the provider");
  }
  return context;
};
