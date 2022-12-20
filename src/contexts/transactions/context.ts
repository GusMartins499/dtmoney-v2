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
}

export const TransactionsContext = createContext({} as TransactionContextProps)
