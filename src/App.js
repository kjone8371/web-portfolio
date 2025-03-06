import {Route, Routes} from "react-router-dom";
import Main from "./components/pages/Main";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
    </Routes>
  );
}

export default App;