import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch } from 'react-redux'; // dispatch an action
import { getPosts } from './actions/posts';
import { Route, Routes } from 'react-router-dom';

import TopNavBar from './navigation/TopNavBar';
import Home from './components/pages/Home';
import Docs from './components/pages/Docs';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPosts());
  }, [dispatch])

  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="docs/*" element={<Docs />} />
      </Routes>
    </>
  );
}

export default App;