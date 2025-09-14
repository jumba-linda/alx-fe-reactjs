import { useParams, Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipeId = parseInt(id)
  
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === recipeId)
  )
  
  if (!recipe) {
    return <div>Recipe not found</div>
  }
  
  return (
    <div>
      <Link to="/">← Back to Recipes</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      {/* Edit and Delete components */}
      <EditRecipeForm recipeId={recipeId} />
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  )
}

export default RecipeDetails
