import { create } from 'zustand'

const useRecipeStore = create((set) => ({
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
    return useRecipeStore.getState().recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(useRecipeStore.getState().searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(useRecipeStore.getState().searchTerm.toLowerCase())
    );
  },
  
  // Favorite actions
  addFavorite: (recipeId) => set((state) => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Recommendations (mock implementation)
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}))

export default useRecipeStore
