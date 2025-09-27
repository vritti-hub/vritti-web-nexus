import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className='content'>
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
        <Routes>
          <Route path='/' element={<div>Home Page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
