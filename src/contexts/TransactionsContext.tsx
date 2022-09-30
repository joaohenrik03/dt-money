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
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3000/transactions');

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url);
    const data = await response.json()
    
    setTransactions(data)
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