import './App.css';
import Home from "./components/HomeComponent";
import Exercise from "./components/TypingComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="practice" element={<Exercise />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
