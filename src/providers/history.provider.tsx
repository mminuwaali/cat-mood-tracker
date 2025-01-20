"use client";
import React from "react";

const HistoryContext = React.createContext<HistoryContextType>({
  history: [],
  addEntry: (entry) => {},
});

export function useHistoryContext() {
  const context = React.useContext(HistoryContext);
  return context;
}

export default function HistoryProvider(properties: React.PropsWithChildren) {
  const [data, setData] = React.useState<HistoryType[]>([]);

  React.useEffect(() => {
    const storedHistory = localStorage.getItem("history");
    console.log(JSON.parse(storedHistory!));

    if (storedHistory) {
      const parsed = JSON.parse(storedHistory);
      if (Array.isArray(parsed)) setData(parsed);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("history", JSON.stringify(data));
  }, [data]);

  const addEntry = (entry: Omit<HistoryType, "createdAt">) => {
    setData(() => [{ ...entry, createdAt: new Date().toString() }, ...data]);
  };

  return (
    <HistoryContext.Provider value={{ history: data, addEntry }}>
      {properties.children}
    </HistoryContext.Provider>
  );
}
