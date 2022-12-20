import { createContext } from 'react'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export interface TransactionContextProps {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (
    transaction: Omit<Transaction, 'createdAt' | 'id'>,
  ) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionContextProps)
