import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Todo';

function App() {
  return (
    <div>
      <h1>#todo</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
