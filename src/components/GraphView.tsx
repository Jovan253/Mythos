import { useEffect, useMemo, type RefObject } from 'react'
import ForceGraph2D, { type ForceGraphMethods, type NodeObject } from 'react-force-graph-2d'
import type { CharacterCategory, CharacterId } from '@/data/types'
import type { GraphData, GraphLink, GraphNode } from '@/lib/graph'
import { ALL_LINK_STYLES } from '@/lib/theme'
import { drawCharacterNode, nodePointerArea } from './CharacterNode'

// react-force-graph mutates link.source/target from a plain id into the resolved
// node object once the simulation starts, so callbacks must handle both shapes.
function linkEndpointId(endpoint: string | number | NodeObject<GraphNode> | undefined): CharacterId {
  if (endpoint && typeof endpoint === 'object') return endpoint.id as CharacterId
  return String(endpoint ?? '')
}

interface GraphViewProps {
  graphData: GraphData
  width: number
  height: number
  selectedId?: CharacterId
  highlightSet: Set<CharacterId> | null
  activeCategories: Set<CharacterCategory>
  onNodeClick: (id: CharacterId) => void
  fgRef: RefObject<ForceGraphMethods<NodeObject<GraphNode>, GraphLink> | undefined>
}

export function GraphView({
  graphData,
  width,
  height,
  selectedId,
  highlightSet,
  activeCategories,
  onNodeClick,
  fgRef,
}: GraphViewProps) {
  const filtered = useMemo(() => {
    const visibleIds = new Set(graphData.nodes.filter((n) => activeCategories.has(n.category)).map((n) => n.id))
    return {
      nodes: graphData.nodes.filter((n) => visibleIds.has(n.id)),
      links: graphData.links.filter((l) => visibleIds.has(linkEndpointId(l.source)) && visibleIds.has(linkEndpointId(l.target))),
    }
  }, [graphData, activeCategories])

  // react-force-graph rebuilds its internal d3-force forces (wiping our custom
  // link distance) whenever the graphData reference changes, so this must re-run
  // on every filtered-data change, not just on mount.
  useEffect(() => {
    const fg = fgRef.current
    if (!fg) return
    fg.d3Force('charge')?.strength(-220)
    const linkForce = fg.d3Force('link')
    if (linkForce && 'distance' in linkForce) {
      ;(linkForce as unknown as { distance: (fn: (link: GraphLink) => number) => void }).distance(
        (link: GraphLink) => (link.kind === 'parent-child' ? 55 : 40),
      )
    }
    fg.d3ReheatSimulation()
  }, [filtered, fgRef])

  return (
    <ForceGraph2D<GraphNode, GraphLink>
      ref={fgRef}
      graphData={filtered}
      width={width}
      height={height}
      backgroundColor="#0b0b12"
      nodeRelSize={4}
      nodeLabel={(node) => node.name}
      nodeCanvasObject={(node, ctx, globalScale) =>
        drawCharacterNode(node, ctx, globalScale, {
          selected: node.id === selectedId,
          dimmed: highlightSet !== null && !highlightSet.has(node.id),
        })
      }
      nodePointerAreaPaint={nodePointerArea}
      linkColor={(link) => {
        const style = ALL_LINK_STYLES[link.kind]
        const dimmed =
          highlightSet !== null && !(highlightSet.has(linkEndpointId(link.source)) && highlightSet.has(linkEndpointId(link.target)))
        return dimmed ? 'rgba(255,255,255,0.04)' : (style?.color ?? '#888')
      }}
      linkLineDash={(link) => ALL_LINK_STYLES[link.kind]?.dash ?? null}
      linkWidth={1.2}
      linkDirectionalArrowLength={(link) => (ALL_LINK_STYLES[link.kind]?.arrow ? 4 : 0)}
      linkDirectionalArrowRelPos={1}
      linkLabel={(link) => link.label}
      onNodeClick={(node) => onNodeClick(node.id)}
      enableNodeDrag
      enableZoomInteraction
      minZoom={0.4}
      maxZoom={5}
      d3AlphaDecay={0.03}
      d3VelocityDecay={0.35}
      cooldownTime={8000}
    />
  )
}
