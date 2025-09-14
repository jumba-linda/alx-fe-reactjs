import create from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta dish with eggs, cheese, and pancetta' },
    { id: 2, title: 'Chicken Curry', description: 'Spicy chicken curry with aromatic spices' }
  ],
  
  // Required actions
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, { id: Date.now(), ...newRecipe }] 
  })),
  setRecipes: (recipes) => set({ recipes })
}))

export default useRecipeStore
