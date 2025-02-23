import styled from '@emotion/styled'

import { colors } from '../../styles/Global'

export const CardContainer = styled.div`
  position: relative;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 25px;
  background-color: ${colors.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    &::after {
      background-image: linear-gradient(to bottom,
      /* Preto forte no topo */
      rgba(0, 0, 0, 0.5) 0%,
      /* Transição para transparente */
      rgba(0, 0, 0, 0.2) 2%,
      /* Centro transparente */
      rgba(0, 0, 0, 0) 50%,
      /* Transição para preto forte */
      rgba(0, 0, 0, 0.2) 98%,
      /* Preto forte na parte inferior */
      rgba(0, 0, 0, 0.5) 100%);
    }
  }
`

export const Loading = styled.p`
  text-align: center;
`

export const WaifuImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: inherit;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;

  ${({ isCardHovered }) =>
    isCardHovered && `
      transform: scale(1.2);
    `
  }

  ${({ isWaifuImageLoaded }) =>
    isWaifuImageLoaded && `
      opacity: 1;
    `
  }
`

export const CardButtonContainer = styled.div`
  position: absolute;
  bottom: 5%;
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${({ isCardHovered }) =>
    isCardHovered && `
      opacity: 1;
    `
  }

  @media (max-width: 1440px) {
    opacity: 1;
    transform: scale(0.75);
  }
`

const CardButtonBase = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  color: ${colors.white};
  background-color: ${colors.blueAlpha};
  transition: background-color 0.3s ease;

  > svg {
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover > svg {
    transform: scale(1.4);
  }
`

export const CardDownloadButton = styled(CardButtonBase)`
  &:hover {
    background-color: ${colors.mossGreen};
  }

  &:hover > svg {
    color: ${colors.softWhite};
  }
`

export const CardLinkButton = styled(CardButtonBase.withComponent('a'))`
  &:hover {
    background-color: ${colors.mintGreen};
  }

  &:hover > svg {
    color: ${colors.mossGreen};
  }
`
