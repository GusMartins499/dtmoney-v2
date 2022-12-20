import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import { useTransactions } from '../../../../hooks/useTransactions'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormTransactions = z.infer<typeof searchFormSchema>

export function SeachForm() {
  const { fetchTransactions } = useTransactions()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormTransactions>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (formData: SearchFormTransactions) => {
    await fetchTransactions(formData.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
