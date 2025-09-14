import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';
import RecipeDetails from './RecipeDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route path="/add" element={<AddRecipeForm />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  </Router>
);

export default App;
