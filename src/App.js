import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AddBook from './containers/AddBook';
import { Routes, Route } from 'react-router-dom';
import SearchBooks from './containers/SearchBooks';

function App() {
  return (
    <div className="App">
     <NavBar/>
      <Routes>
        <Route path='/' element={<AddBook/>} />
        <Route path='/search' element={<SearchBooks />} />
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
