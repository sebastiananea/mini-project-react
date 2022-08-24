import Header from "./header/Header";
import Form from "./Form/Form";
import TableData from "./Table/TableData";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main">
          <Routes>
            <Route path="/table" element={<TableData />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
