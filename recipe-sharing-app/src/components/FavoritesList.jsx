import useRecipeStore from '../store/recipeStore'
import { Link } from 'react-router-dom'

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites)
  const recipes = useRecipeStore(state => state.recipes)
  const removeFavorite = useRecipeStore(state => state.removeFavorite)
  
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id))
  
  if (favoriteRecipes.length === 0) {
    return (
      <div className="favorites-list">
        <h2>My Favorites</h2>
        <p>You haven't added any recipes to your favorites yet.</p>
        <Link to="/">Browse recipes</Link>
      </div>
    )
  }
  
  return (
    <div className="favorites-list">
      <h2>My Favorites</h2>
      <div className="recipe-list">
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <div className="recipe-actions">
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
              <button onClick={() => removeFavorite(recipe.id)}>
                Remove from Favorites
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesList
