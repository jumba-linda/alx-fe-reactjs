import useRecipeStore from '../store/recipeStore'
import { Link } from 'react-router-dom'

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.getFilteredRecipes())
  
  return (
    <div className="recipe-list">
      {filteredRecipes().map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
