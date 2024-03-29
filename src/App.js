import React from 'react';
import AnimRoutes from './components/AnimRoutes';
import {BrowserRouter as Router} from 'react-router-dom';
import {motion} from 'framer-motion';
import Header from './components/Header'
import Home from './pages/Home';

import { Link } from 'react-router-dom';

const App = () => {
  return <div>
    <Router>
      <Header/>
      <AnimRoutes/>
    </Router>
  </div>;
};

export default App;
