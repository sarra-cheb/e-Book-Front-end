import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Register from './components/AuthComponent/Register';
import Login from './components/AuthComponent/Login';
import Layout from './components/Layout';
import PrivateRoute from './route/PrivatRoute';
import Books from './components/Pages/Books';
import Category from './components/Pages/Categories';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books />} />
          <Route path='/categories' element={<Category />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route exact path="/admin" component={<PrivateRoute><Layout /></PrivateRoute>} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
