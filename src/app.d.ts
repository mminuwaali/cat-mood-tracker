type HistoryType = {
  name: string;
  color: string;
  createdAt: string;
  description: string;
  icon: ReturnType<typeof require>;
};

type HistoryContextType = {
  history: HistoryType[];
  addEntry: (entry: Omit<HistoryType, "createdAt">) => void;
};
