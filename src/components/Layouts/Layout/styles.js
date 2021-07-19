/* eslint-disable */
import styled, { createGlobalStyle } from 'styled-components'
import {
  HEADER_HEIGHT,
  NAV_TABS,
} from '../../../infrastructure/constants/sizes'

function hexToRgbA(hex, type = 'bg') {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `0x${c.join('')}`
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ',',
    )}, var(--tw-${type}-opacity))`
  }
  return hex
}

const GlobalStyle = createGlobalStyle`
.tw-bg-primary{
    background: ${({ paleta }) => hexToRgbA(paleta.primario)};
}

.hover\\:tw-bg-primary:hover{
  background: ${({ paleta }) => hexToRgbA(paleta.primario)};
}
.tw-border-primary{
  border-color: ${({ paleta }) => hexToRgbA(paleta.primario, 'border')};
}

.tw-text-primary{
  color: ${({ paleta }) => hexToRgbA(paleta.primario, 'text')};
}
.tw-bg-secondary{
    background: ${({ paleta }) => hexToRgbA(paleta.secundario)};
}

.tw-border-secondary{
  border-color: ${({ paleta }) => hexToRgbA(paleta.secundario, 'border')};
}

.tw-text-secondary{
  color: ${({ paleta }) => paleta.secundario};
}
.tw-border-tertiary{
  border-color: ${({ paleta }) => paleta.terciario};
}
.tw-bg-tertiary{
    background: ${({ paleta }) => paleta.terciario};
}
.tw-text-tertiary{
  color: ${({ paleta }) => paleta.terciario};
}

`

const Container = styled.div`
  padding-top: ${`${HEADER_HEIGHT + NAV_TABS}px`};
  @media (min-width: 640px) {
    padding-left: 60px;
  }
`
export { Container, GlobalStyle }
