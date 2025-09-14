import useRecipeStore from './recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.getFilteredRecipes())
  const searchTerm = useRecipeStore(state => state.searchTerm)

  return (
    <div className="recipe-list">
      {searchTerm && (
        <p className="search-results-info">
          Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} 
          {searchTerm ? ` matching "${searchTerm}"` : ''}
        </p>
      )}
      
      {filteredRecipes.length === 0 ? (
        <div className="no-results">
          <p>No recipes found matching your search criteria.</p>
          <p>Try adjusting your search term or filters.</p>
        </div>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p className="recipe-meta">
              <span>Difficulty: {recipe.difficulty}</span>
              <span>Prep Time: {recipe.prepTime} minutes</span>
            </p>
            <p>{recipe.description}</p>
            <div className="ingredients-preview">
              <strong>Ingredients:</strong> {recipe.ingredients.slice(0, 3).join(', ')}
              {recipe.ingredients.length > 3 && '...'}
            </div>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList
