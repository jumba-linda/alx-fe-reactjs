import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FilterPanel from './components/FilterPanel'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Recipe Sharing App</h1>
        
        <SearchBar />
        
        <div className="main-content">
          <aside className="sidebar">
            <FilterPanel />
          </aside>
          
          <main className="content">
            <Routes>
              <Route path="/" element={
                <>
                  <AddRecipeForm />
                  <RecipeList />
                </>
              } />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
