import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;

  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  min-width: 51.2rem;
  padding: 4rem 4.8rem;

  border-radius: 6px;
  background-color: ${props => props.theme["gray-800"]};

  form {
    margin-top: 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
      padding: 1.6rem;

      border-radius: 6px;
      border: 0;
      background-color: ${props => props.theme["gray-900"]};

      color: ${props => props.theme["gray-300"]};

      &::placeholder {
        color: ${props => props.theme["gray-500"]}; 
      }
    }

    button[type='submit'] {
      height: 5.8rem;
      padding: 0 2.4rem;
      margin-top: 2.4rem;

      color: ${props => props.theme.white};
      font-weight: bold;

      border: 0;
      background-color: ${props => props.theme["green-500"]};
      border-radius: 6px;
      cursor: pointer;

      transition: background-color 0.2s;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      &:not(:disabled):hover {
        background-color: ${props => props.theme["green-700"]};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;

  background: transparent;
  border: 0;  
  cursor: pointer;

  color: ${props => props.theme["gray-500"]};
  line-height: 0;
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
  margin-top: 0.8rem;
`;

interface TransactionTypeButtonProps {
  variant?: 'income' | 'outcome';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background-color: ${props => props.theme["gray-700"]};
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  padding: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  color: ${props => props.theme["gray-300"]};

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0;
  }

  svg {
    color: ${props => props.variant == 'income' ? props.theme["green-300"] : props.theme["red-500"]};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background-color: ${props => props.theme["gray-600"]};  
  }

  &[data-state='checked'] {
    color: ${props => props.theme.white};

    background-color: ${props => props.variant === 'income' ? props.theme["green-500"] : props.theme["red-500"]};

    svg {
      color: ${props => props.theme.white};  
    }
  }
`;