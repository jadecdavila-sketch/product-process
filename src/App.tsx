import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { CouncilsPage } from '@/pages/CouncilsPage';
import { CouncilPage } from '@/pages/CouncilPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="stage/:stageId" element={<HomePage />} />
        <Route path="councils" element={<CouncilsPage />} />
        <Route path="council/:councilId" element={<CouncilPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
