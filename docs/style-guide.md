# Background: Liquid Ether

## Overview

The Liquid Ether background adds a soft, animated fluid effect behind the UI. It is responsive, optimized for performance, and can be toggled on or off.

## Component

`src/components/LiquidEtherBackground.jsx`

### Props

- `colors: string[]` – color stops for the effect
- `speed: number` – animation speed multiplier
- `opacity: number` – global alpha for the effect
- `resolution: number` – internal render scale (0.25–1)
- `className: string` – optional container class
- `style: React.CSSProperties` – optional container styles
- `isEnabled: boolean` – enable/disable rendering

### Usage

```jsx
import LiquidEtherBackground from '@/components/LiquidEtherBackground.jsx'

<LiquidEtherBackground
  colors={["#0ea5e9","#22d3ee","#0ea5e9"]}
  speed={0.35}
  opacity={0.16}
  resolution={0.5}
  isEnabled={true}
/>
```

### Toggle

Use a state variable to toggle:

```jsx
const [bgEnabled, setBgEnabled] = useState(true)
<button onClick={() => setBgEnabled(v => !v)}>{bgEnabled ? 'Background: On' : 'Background: Off'}</button>
```

## Performance

- `resolution` lowers internal canvas size to reduce work
- `requestAnimationFrame` loop cancels on unmount
- Device pixel ratio capped to `2` to avoid excessive work on high‑DPI displays

## Browser Support

- Verified on modern Chromium, Firefox, and Safari engines.