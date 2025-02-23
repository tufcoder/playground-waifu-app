import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { colors } from '../../styles/Global'

export const AppContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-block-end: 1rem;
`
export const Title = styled.h1`
  font-family: "Bubblegum Sans", serif;
  color: ${colors.tomato};
  font-size: 64px;
  text-align: center;
`

export const Categories = styled.select`
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-family: "Bangers", serif;
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  background-color: ${colors.tomato};
  cursor: pointer;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${colors.tomato};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.redTomato};
  }

  &:disabled {
    background-color: ${colors.gray};
    cursor: not-allowed;

    &::after {
      width: 1rem;
      height: 1rem;
      display: inline-block;
      content: '';
      margin-left: 0.5rem;
      border: 2px solid ${colors.white};
      border-top: 2px solid transparent;
      border-radius: 50%;
      animation: ${spin} 1s linear infinite;
    }
  }
`

export const WaifusContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
