import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import type { ForceGraphMethods, NodeObject } from 'react-force-graph-2d'
import { CHARACTERS, RELATIONSHIPS } from '@/data'
import type { CharacterId } from '@/data/types'
import { buildGraphData, type GraphLink, type GraphNode } from '@/lib/graph'
import { useAppState } from '@/context/AppStateContext'
import { useFocusMode } from '@/hooks/useFocusMode'
import { useContainerSize } from '@/hooks/useContainerSize'
import { GraphView } from '@/components/GraphView'
import { DetailPanel } from '@/components/DetailPanel'
import { SearchBar } from '@/components/SearchBar'
import { FilterControls } from '@/components/FilterControls'
import { Legend } from '@/components/Legend'

const GRAPH_DATA = buildGraphData(CHARACTERS, RELATIONSHIPS)

export function GraphPage() {
  const { id } = useParams<{ id?: string }>()
  const navigate = useNavigate()
  const { activeCategories, focusModeActive } = useAppState()
  const { ref: containerRef, width, height } = useContainerSize<HTMLDivElement>()
  const fgRef = useRef<ForceGraphMethods<NodeObject<GraphNode>, GraphLink>>(undefined)

  const highlightSet = useFocusMode(id, focusModeActive)

  const handleNodeClick = (characterId: CharacterId) => {
    navigate(`/character/${characterId}`)
  }

  const handleSearchSelect = (characterId: CharacterId) => {
    navigate(`/character/${characterId}`)
    fgRef.current?.zoomToFit(600, 140, (n) => n.id === characterId)
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0b0b12]">
      <div ref={containerRef} className="relative min-w-0 flex-1">
        {width > 0 && height > 0 && (
          <GraphView
            graphData={GRAPH_DATA}
            width={width}
            height={height}
            selectedId={id}
            highlightSet={highlightSet}
            activeCategories={activeCategories}
            onNodeClick={handleNodeClick}
            fgRef={fgRef}
          />
        )}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4">
          <div className="pointer-events-auto flex items-start justify-between gap-4">
            <div>
              <h1 className="text-lg font-semibold text-white">Mythos</h1>
              <p className="text-xs text-slate-500">A map of Greek mythology's family ties</p>
            </div>
            <SearchBar onSelect={handleSearchSelect} />
          </div>
          <div className="pointer-events-auto flex items-end justify-between gap-4">
            <FilterControls />
            <Legend />
          </div>
        </div>
      </div>
      {id && <DetailPanel characterId={id} />}
    </div>
  )
}
