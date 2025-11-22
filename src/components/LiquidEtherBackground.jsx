import React, { useEffect, useRef } from 'react'

function LiquidEtherBackground({
  colors = ['#06b6d4', '#22d3ee', '#0ea5e9'],
  speed = 0.4,
  opacity = 0.18,
  resolution = 0.5,
  className = '',
  style = {},
  isEnabled = true,
}) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || !isEnabled) return
    const ctx = el.getContext('2d')
    let w = el.clientWidth
    let h = el.clientHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const scale = Math.max(0.25, Math.min(1, resolution))
    const iw = Math.max(1, Math.floor(w * scale))
    const ih = Math.max(1, Math.floor(h * scale))
    el.width = Math.floor(iw * dpr)
    el.height = Math.floor(ih * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.globalAlpha = opacity

    const blobs = colors.map((c, i) => ({
      x: iw * (0.2 + i * 0.25),
      y: ih * (0.3 + i * 0.15),
      r: Math.min(iw, ih) * 0.6,
      vx: (Math.random() * 2 - 1) * speed,
      vy: (Math.random() * 2 - 1) * speed,
      color: c,
    }))

    let running = true
    let last = performance.now()
    function frame(t) {
      if (!running) return
      const dt = Math.min(0.033, (t - last) / 1000)
      last = t
      ctx.clearRect(0, 0, iw, ih)
      for (const b of blobs) {
        b.x += b.vx * 60 * dt
        b.y += b.vy * 60 * dt
        if (b.x < 0 || b.x > iw) b.vx *= -1
        if (b.y < 0 || b.y > ih) b.vy *= -1
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        g.addColorStop(0, b.color)
        g.addColorStop(1, 'transparent')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, iw, ih)
      }
      requestAnimationFrame(frame)
    }
    const onResize = () => {
      w = el.clientWidth
      h = el.clientHeight
      const iw2 = Math.max(1, Math.floor(w * scale))
      const ih2 = Math.max(1, Math.floor(h * scale))
      el.width = Math.floor(iw2 * dpr)
      el.height = Math.floor(ih2 * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    requestAnimationFrame(frame)
    window.addEventListener('resize', onResize)
    return () => {
      running = false
      window.removeEventListener('resize', onResize)
    }
  }, [colors, speed, opacity, resolution, isEnabled])

  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className}`} style={style}>
      <canvas ref={ref} className="w-full h-full" />
    </div>
  )
}

export default LiquidEtherBackground