import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1.6rem;

  input {
    flex: 1;
    padding: 1.6rem;

    border-radius: 6px;
    border: 0;
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    padding: 1.6rem;

    background-color: transparent;  
    border: 1px solid ${props => props.theme["green-300"]};
    border-radius: 6px;
    cursor: pointer;

    color: ${props => props.theme["green-300"]};
    font-weight: bold;

    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:not(:disabled):hover {
      background-color: ${props => props.theme["green-500"]}; 
      border-color: 1px solid ${props => props.theme["green-500"]};

      color: ${props => props.theme.white};   
    }
  }
`;