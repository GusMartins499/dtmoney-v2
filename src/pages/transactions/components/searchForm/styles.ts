import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 8px;
    border: 0;
    background: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-700']};
    color: ${({ theme }) => theme['green-300']};
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({ theme }) => theme['green-500']};
      border: 1px solid ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`
