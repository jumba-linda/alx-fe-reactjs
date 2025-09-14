import create from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with eggs, cheese, and pancetta' },
    { id: 2, title: 'Chicken Curry', description: 'Spicy chicken curry with aromatic spices' }
  ],
  
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
  
  setRecipes: (recipes) => set({ recipes })
}))

export default useRecipeStore
