import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
