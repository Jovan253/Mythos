import { HashRouter, Route, Routes } from 'react-router-dom'
import { AppStateProvider } from '@/context/AppStateContext'
import { GraphPage } from '@/pages/GraphPage'

function App() {
  return (
    <AppStateProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<GraphPage />} />
          <Route path="/character/:id" element={<GraphPage />} />
        </Routes>
      </HashRouter>
    </AppStateProvider>
  )
}

export default App
