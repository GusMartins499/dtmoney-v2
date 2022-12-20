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

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('/transactions')
      setTransactions(data)
    })()
  }, [])

  const contextData: TransactionContextProps = {
    transactions,
  }

  return (
    <TransactionsContext.Provider value={contextData}>
      {children}
    </TransactionsContext.Provider>
  )
}
