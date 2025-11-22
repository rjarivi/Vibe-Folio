import type { CSSProperties } from 'react'

export interface LiquidEtherProps {
  colors?: string[]
  speed?: number
  opacity?: number
  resolution?: number
  className?: string
  style?: CSSProperties
  isEnabled?: boolean
}

declare function LiquidEtherBackground(props: LiquidEtherProps): JSX.Element | null
export default LiquidEtherBackground