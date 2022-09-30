import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

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
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
      }
    })
    
    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions();
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ 
        transactions: transactions,
        fetchTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}