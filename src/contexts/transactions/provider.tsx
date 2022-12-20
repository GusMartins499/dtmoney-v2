import { ReactNode, useEffect, useState } from 'react'
import {
  TransactionContextProps,
  Transaction,
  TransactionsContext,
} from './context'
import { api } from '../../services/api'

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = async (query?: string) => {
    const { data } = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(data)
  }

  const createTransaction = async (
    transaction: Omit<Transaction, 'createdAt' | 'id'>,
  ) => {
    const { description, category, price, type } = transaction

    const { data: newTransaction } = await api.post('/transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })
    setTransactions((prevState) => [newTransaction, ...prevState])
  }

  const contextData: TransactionContextProps = {
    transactions,
    fetchTransactions,
    createTransaction,
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={contextData}>
      {children}
    </TransactionsContext.Provider>
  )
}
