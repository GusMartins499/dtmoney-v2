import { useContext } from 'react'
import { TransactionsContext } from '../contexts/transactions/context'

export function useTransactions() {
  return useContext(TransactionsContext)
}
