import useRecipeStore from '../store/recipeStore'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const RecommendationsList = () => {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)
  const recommendations = useRecipeStore(state => state.recommendations)
  
  useEffect(() => {
    generateRecommendations()
  }, [generateRecommendations])
  
  if (recommendations.length === 0) {
    return (
      <div className="recommendations-list">
        <h2>Personalized Recommendations</h2>
        <p>No recommendations available yet. Add some recipes to your favorites to get personalized recommendations.</p>
        <Link to="/">Browse recipes</Link>
      </div>
    )
  }
  
  return (
    <div className="recommendations-list">
      <h2>Personalized Recommendations</h2>
      <p>Based on your favorite recipes, we think you might enjoy these:</p>
      <div className="recipe-list">
        {recommendations.map(recipe => (
          <div key={recipe.id} className="recipe-card">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendationsList
