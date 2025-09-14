import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with eggs, cheese, and pancetta' },
    { id: 2, title: 'Chicken Curry', description: 'Spicy chicken curry with aromatic spices' }
  ],
  searchTerm: '',
  favorites: [],
  recommendations: [],
  
  // Recipe actions
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { id: Date.now(), ...newRecipe }] 
  })),
  
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Search actions
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  getFilteredRecipes: () => {
    const state = get();
    return state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
  },
  
  // Favorite actions
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  isFavorite: (recipeId) => {
    const state = get();
    return state.favorites.includes(recipeId);
  },
  
  // Recommendations (more sophisticated implementation)
  generateRecommendations: () => set((state) => {
    // If user has favorites, recommend similar recipes
    if (state.favorites.length > 0) {
      // Get all favorite recipe titles as keywords
      const favoriteTitles = state.favorites.map(favId => {
        const recipe = state.recipes.find(r => r.id === favId);
        return recipe ? recipe.title.toLowerCase().split(' ') : [];
      }).flat();
      
      // Find recipes that contain any of the favorite keywords
      const recommended = state.recipes
        .filter(recipe => 
          !state.favorites.includes(recipe.id) && // Don't recommend already favorited
          favoriteTitles.some(word => 
            recipe.title.toLowerCase().includes(word) || 
            recipe.description.toLowerCase().includes(word)
          )
        )
        .slice(0, 3); // Limit to 3 recommendations
      
      return { recommendations: recommended };
    }
    
    // If no favorites, recommend random recipes
    const shuffled = [...state.recipes].sort(() => 0.5 - Math.random());
    return { recommendations: shuffled.slice(0, 3) };
  }),
}))

export default useRecipeStore
