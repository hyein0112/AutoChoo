import { Route, Routes } from 'react-router-dom';
import * as P from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route path="/malatang" element={<P.Malatang />} />
      <Route path="/tteokbokki" element={<P.Tteokbokki />} />
    </Routes>
  );
}

export default App;
