import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ClickContext } from './Context';
import * as P from './pages';

function App() {
  const [isClicked, setIsClicked] = useState(true);
  return (
    <ClickContext.Provider value={{ isClicked, setIsClicked }}>
      <Routes>
        <Route path="/" element={<P.Main />} />
        <Route path={`/malatang`} element={<P.Malatang />} />
        <Route path={`/tteokbokki`} element={<P.Tteokbokki />} />
      </Routes>
    </ClickContext.Provider>
  );
}

export default App;
