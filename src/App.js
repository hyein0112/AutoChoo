import { Route, Routes } from 'react-router-dom';
import * as P from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<P.Main />} />
      <Route
        path={`${process.env.PUBLIC_URL}/malatang`}
        element={<P.Malatang />}
      />
      <Route
        path={`${process.env.PUBLIC_URL}/tteokbokki`}
        element={<P.Tteokbokki />}
      />
    </Routes>
  );
}

export default App;
