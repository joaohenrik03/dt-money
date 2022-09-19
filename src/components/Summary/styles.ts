import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: -6.8rem auto 0;
  padding: 0 2.4rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
`;

interface SummaryCardProps {
  variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 3.2rem;

  background-color: ${props => props.theme["gray-600"]};
  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1.6rem;
    font-size: 3.2rem;
  }

  ${props => props.variant == 'green' && css`
    background-color: ${props => props.theme["green-700"]};
  `}
`;