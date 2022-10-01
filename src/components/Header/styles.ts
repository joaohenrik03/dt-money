import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 4rem 0 12rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  height: 5rem;
  padding: 0 2.4rem;

  font-weight: bold;
  color: ${(props) => props.theme.white};

  border: 0;
  border-radius: 6px;
  background-color: ${(props) => props.theme['green-500']};
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`
