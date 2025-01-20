type HistoryType = {
  icon: any;
  name: string;
  color: string;
  createdAt: string;
  description: string;
};

type HistoryContextType = {
  history: HistoryType[];
  addEntry: (entry: Omit<HistoryType, "createdAt">) => void;
};
