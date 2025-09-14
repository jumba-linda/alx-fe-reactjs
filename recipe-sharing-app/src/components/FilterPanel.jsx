import { useState } from 'react'
import useRecipeStore from './recipeStore'

const FilterPanel = () => {
  const filters = useRecipeStore(state => state.filters)
  const setFilters = useRecipeStore(state => state.setFilters)
  const allRecipes = useRecipeStore(state => state.recipes)
  
  // Get all unique ingredients from all recipes
  const allIngredients = [...new Set(allRecipes.flatMap(recipe => recipe.ingredients))]
  
  const [ingredientInput, setIngredientInput] = useState('')
  
  const handleIngredientAdd = () => {
    if (ingredientInput && !filters.ingredients.includes(ingredientInput)) {
      setFilters({ ingredients: [...filters.ingredients, ingredientInput] })
      setIngredientInput('')
    }
  }
  
  const handleIngredientRemove = (ingredientToRemove) => {
    setFilters({ 
      ingredients: filters.ingredients.filter(ing => ing !== ingredientToRemove) 
    })
  }
  
  return (
    <div className="filter-panel">
      <h3>Filter Recipes</h3>
      
      <div className="filter-group">
        <label>Difficulty:</label>
        <select 
          value={filters.difficulty} 
          onChange={(e) => setFilters({ difficulty: e.target.value })}
        >
          <option value="All">All Levels</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      
      <div className="filter-group">
        <label>Max Preparation Time: {filters.maxPrepTime} minutes</label>
        <input 
          type="range" 
          min="10" 
          max="120" 
          step="5"
          value={filters.maxPrepTime} 
          onChange={(e) => setFilters({ maxPrepTime: parseInt(e.target.value) })}
        />
      </div>
      
      <div className="filter-group">
        <label>Ingredients:</label>
        <div className="ingredient-input">
          <input 
            type="text" 
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
            placeholder="Add ingredient to filter"
            list="ingredientSuggestions"
          />
          <datalist id="ingredientSuggestions">
            {allIngredients.map(ingredient => (
              <option key={ingredient} value={ingredient} />
            ))}
          </datalist>
          <button onClick={handleIngredientAdd}>Add</button>
        </div>
        
        {filters.ingredients.length > 0 && (
          <div className="selected-ingredients">
            {filters.ingredients.map(ingredient => (
              <span key={ingredient} className="ingredient-tag">
                {ingredient}
                <button onClick={() => handleIngredientRemove(ingredient)}>×</button>
              </span>
            ))}
          </div>
        )}
      </div>
      
      <button 
        className="clear-filters"
        onClick={() => setFilters({ difficulty: 'All', maxPrepTime: 120, ingredients: [] })}
      >
        Clear All Filters
      </button>
    </div>
  )
}

export default FilterPanel
