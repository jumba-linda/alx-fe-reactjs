import { useParams, Link, useNavigate } from 'react-router-dom'
import useRecipeStore from '../store/recipeStore'
import { useState } from 'react'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = parseInt(id)
  const navigate = useNavigate()
  
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === recipeId)
  )
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
  const addFavorite = useRecipeStore(state => state.addFavorite)
  const removeFavorite = useRecipeStore(state => state.removeFavorite)
  const favorites = useRecipeStore(state => state.favorites)
  
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(recipe?.title || '')
  const [editDescription, setEditDescription] = useState(recipe?.description || '')
  
  if (!recipe) {
    return <div>Recipe not found</div>
  }
  
  const isFavorite = favorites.includes(recipeId)
  
  const handleSave = () => {
    updateRecipe(recipeId, { title: editTitle, description: editDescription })
    setIsEditing(false)
  }
  
  const handleDelete = () => {
    deleteRecipe(recipeId)
    navigate('/')
  }
  
  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId)
    } else {
      addFavorite(recipeId)
    }
  }
  
  return (
    <div className="recipe-details">
      <Link to="/">← Back to Recipes</Link>
      
      {isEditing ? (
        <div className="edit-form">
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Description"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          
          <div className="recipe-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete} className="delete-btn">Delete</button>
            <button onClick={toggleFavorite}>
              {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default RecipeDetails
