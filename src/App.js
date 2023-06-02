import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Register from './components/AuthComponent/Register';
import Login from './components/AuthComponent/Login';
import Layout from './components/Layout';
import Books from './components/Pages/Books/Books';
import Category from './components/Pages/Catgorys/Categories';
import React from 'react';
import EditBook from './components/Pages/Books/EditBook';
import PrivateRoute from './route/PrivateRoute';
import EditCategory from './components/Pages/Catgorys/EditCategory';
import AddBook from './components/Pages/Books/AddBook';
import AddCategory from './components/Pages/Catgorys/AddCategory';
import DetailsCategory from './components/Pages/Catgorys/DetailsofCategory';
import DetailsBook from './components/Pages/Books/DetailsofBook';
import NotFound from './components/ErrorPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';
import HomeClient from './ClientSide/HomeClient'
import AboutUs from './components/AboutUs';



function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeClient />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/admin" element={<PrivateRoute><Layout /></PrivateRoute>} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path='/books' element={<Books />} />
          <Route path='/categories' element={<Category />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editBook/:id' element={<PrivateRoute><EditBook /></PrivateRoute>} />
          <Route path='/editCategory/:id' element={<PrivateRoute><EditCategory /></PrivateRoute>} />
          <Route path='/addBook' element={<PrivateRoute><AddBook /></PrivateRoute>} />
          <Route path='/addCategory' element={<PrivateRoute><AddCategory /></PrivateRoute>} />
          <Route path='/detailsCategory/:id' element={<DetailsCategory />} />
          <Route path='/detailsBook/:id' element={<DetailsBook />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}


export default App;
