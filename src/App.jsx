import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { routes } from './router';

function App() {
  return (
    <>
      <Routes>
        { routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </>
  );
}

export default App;
