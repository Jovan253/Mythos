import type { GraphNode } from '@/lib/graph'
import { CATEGORY_COLORS, DIMMED_OPACITY } from '@/lib/theme'

const BASE_RADIUS = 6

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function drawCharacterNode(
  node: GraphNode & { x?: number; y?: number },
  ctx: CanvasRenderingContext2D,
  globalScale: number,
  opts: { selected: boolean; dimmed: boolean },
) {
  const x = node.x ?? 0
  const y = node.y ?? 0
  const color = CATEGORY_COLORS[node.category]
  const opacity = opts.dimmed ? DIMMED_OPACITY : 1
  const radius = opts.selected ? BASE_RADIUS * 1.4 : BASE_RADIUS

  ctx.beginPath()
  ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
  ctx.fillStyle = hexToRgba(color, opacity)
  ctx.fill()

  if (opts.selected) {
    ctx.lineWidth = 2 / globalScale
    ctx.strokeStyle = hexToRgba('#ffffff', opacity)
    ctx.stroke()
  }

  const fontSize = Math.max(10, 12 / globalScale)
  ctx.font = `${node.category === 'olympian' || node.category === 'titan' ? '600' : '400'} ${fontSize}px ui-sans-serif, system-ui, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'top'
  ctx.fillStyle = hexToRgba('#e8e6f0', opts.dimmed ? DIMMED_OPACITY : 0.95)
  ctx.fillText(node.name, x, y + radius + 2)
}

export function nodePointerArea(
  node: GraphNode & { x?: number; y?: number },
  color: string,
  ctx: CanvasRenderingContext2D,
) {
  const x = node.x ?? 0
  const y = node.y ?? 0
  ctx.beginPath()
  ctx.arc(x, y, BASE_RADIUS * 1.8, 0, 2 * Math.PI, false)
  ctx.fillStyle = color
  ctx.fill()
}
