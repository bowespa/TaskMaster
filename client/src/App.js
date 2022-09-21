import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import NotFound from "./pages/NotFound"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
