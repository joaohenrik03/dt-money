import { Children, createContext, ReactNode, useEffect, useState } from "react";

type TransactionType = {
  id: number;
  category: string;
  description: string;
  createdAt: string;
  type: 'income' | 'outcome';
  price: number;
}

interface TransactionsContextType {
  transactions: TransactionType[];
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3000/transactions');
    const data = await response.json()
    
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions();
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions: transactions }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}